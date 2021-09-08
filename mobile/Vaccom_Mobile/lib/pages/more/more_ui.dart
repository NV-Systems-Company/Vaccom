import 'package:flutter/material.dart';
import 'package:package_info/package_info.dart';

class More extends StatefulWidget {
  const More({ Key key }) : super(key: key);

  @override
  _MoreState createState() => _MoreState();
}

class _MoreState extends State<More> {

  String version = '';
String buildNumber = '';
  @override
  void initState() {
    getVersion();
    super.initState();
  }

  void getVersion() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    version = packageInfo.version;
    buildNumber = packageInfo.buildNumber;
    setState(() => {});
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text(version + buildNumber),
    );
  }
}