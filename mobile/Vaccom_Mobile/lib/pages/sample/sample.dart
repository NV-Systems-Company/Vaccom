import 'package:flutter/material.dart';
import 'package:vaccom_mobile/commons/color.dart';
import 'package:vaccom_mobile/commons/styles.dart';
import 'package:vaccom_mobile/commons/utils.dart';

class SamplePage extends StatefulWidget {
  final String title;
  const SamplePage({this.title = 'Sample'});

  @override
  State<StatefulWidget> createState() => _SamplePageState();
}

class _SamplePageState extends State<SamplePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Utils.gradientAppBar(
        child: AppBar(
          brightness: Brightness.dark,
          backgroundColor: Colors.transparent,
          title: Text(
            widget.title,
            style: AppStyle.appBarTitle,
          ),
          actions: [],
        ),
      ),
      body: Container(
        color: AppColor.nearlyWhite,
      ),
    );
  }
}
