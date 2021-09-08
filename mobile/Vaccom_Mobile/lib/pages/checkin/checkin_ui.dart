import 'dart:developer';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';

class CheckIn extends StatefulWidget {
  const CheckIn({Key key}) : super(key: key);

  @override
  _CheckInState createState() => _CheckInState();
}

class _CheckInState extends State<CheckIn> with SingleTickerProviderStateMixin {
  Barcode result;
  QRViewController controller;
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');
  AnimationController _animationController;

  @override
  void initState() {
    _animationController = new AnimationController(
        duration: new Duration(seconds: 2), vsync: this);
    animateScanAnimation(false);
    _animationController.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        animateScanAnimation(true);
      } else if (status == AnimationStatus.dismissed) {
        animateScanAnimation(false);
      }
    });
    super.initState();
  }

  @override
  void reassemble() {
    super.reassemble();
    if (Platform.isAndroid) {
      controller.pauseCamera();
    }
    controller.resumeCamera();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          _buildQrView(context),
          Align(
            alignment: Alignment.topCenter,
            child: Padding(
              padding: EdgeInsets.symmetric(
                horizontal: 50,
                vertical: 50,
              ),
              child: Text(
                'Đặt mã QR ở trung tâm hình vuông để kiểm tra tự động',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 12,
                ),
              ),
            ),
          ),
          ImageScannerAnimation(
            animation: _animationController,
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Padding(
              padding: EdgeInsets.only(bottom: 30),
              child: IconButton(
                icon: Image.asset(
                  'assets/images/switch_camera.png',
                  color: Colors.white,
                  width: 50,
                  height: 50,
                ),
                onPressed: () async {
                  await controller?.flipCamera();
                  setState(() {});
                },
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQrView(BuildContext context) {
    // For this example we check how width or tall the device is and change the scanArea and overlay accordingly.
    var scanArea = (MediaQuery.of(context).size.width < 400 ||
            MediaQuery.of(context).size.height < 400)
        ? 270.0
        : 300.0;
    // To ensure the Scanner view is properly sizes after rotation
    // we need to listen for Flutter SizeChanged notification and update controller
    return QRView(
      key: qrKey,
      onQRViewCreated: _onQRViewCreated,
      overlay: QrScannerOverlayShape(
          borderColor: Colors.white,
          borderRadius: 0,
          borderLength: 10,
          borderWidth: 7,
          cutOutSize: scanArea),
      onPermissionSet: (ctrl, p) => _onPermissionSet(context, ctrl, p),
    );
  }

  void _onQRViewCreated(QRViewController controller) {
    setState(() {
      this.controller = controller;
    });
    controller.scannedDataStream.listen((scanData) {
      if (result == null && scanData != null) {
        setState(() {
          result = scanData;
        });
        showDialog<void>(
          context: context,
          builder: (BuildContext context) {
            return WillPopScope(
              onWillPop: () async {
                setState(() {
                  result = null;
                });
                return true;
              },
              child: AlertDialog(
                title: const Text('Kết quả'),
                content: SingleChildScrollView(
                  child: Text('${scanData.code}'),
                ),
              ),
            );
          },
        );
      }
    });
  }

  void _onPermissionSet(BuildContext context, QRViewController ctrl, bool p) {
    log('${DateTime.now().toIso8601String()}_onPermissionSet $p');
    if (!p) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('no Permission')),
      );
    }
  }

  void animateScanAnimation(bool reverse) {
    if (reverse) {
      _animationController.reverse(from: 1.0);
    } else {
      _animationController.forward(from: 0.0);
    }
  }

  @override
  void dispose() {
    _animationController.dispose();
    controller?.dispose();
    super.dispose();
  }
}

class ImageScannerAnimation extends AnimatedWidget {

  ImageScannerAnimation({Key key, Animation<double> animation})
      : super(key: key, listenable: animation);

  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable;
    final scorePosition = animation.value * 250; 
    return new Align(
      alignment: Alignment.center,
      child: Container(
        width: 220,
        height: 250,
        child: Stack(
          children: [
            Positioned(
              bottom: scorePosition,
              child: Container(
                color: Colors.lightGreenAccent, height: 3, //Gradient Height
                width: 220,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
