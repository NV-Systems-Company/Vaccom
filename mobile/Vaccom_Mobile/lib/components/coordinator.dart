import 'dart:math';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:tiengviet/tiengviet.dart';
import 'package:vaccom_mobile/commons/color.dart';
import 'package:vaccom_mobile/components/custom_search_bar.dart';
import 'package:vaccom_mobile/model/base_item.dart';

typedef OnPickedItem = Function(BaseItem);

class Coordinator {
  static showActionSheetBar(
      {@required BuildContext mainContext,
      List<BaseItem> data,
      BaseItem currentData,
      Function onDismiss,
      OnPickedItem onPickedItem,
      @required String title,
      bool showSearchBar = false,
      bool showButtonSearch = false,
      String searchPlaceholder,
      bool getValueFromSearchBox = false}) {
    showModalBottomSheet<BaseItem>(
      isScrollControlled: true,
      isDismissible: true,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(15),
          topRight: Radius.circular(15),
        ),
      ),
      context: mainContext,
      builder: (BuildContext context) {
        return BottomContent(
          data: data,
          currentData: currentData,
          label: title,
          placeholder: searchPlaceholder,
          mainContext: mainContext,
          showButtonSearch: showButtonSearch,
          showSearchBar: showSearchBar,
          getValueFromSearchBox: getValueFromSearchBox,
          onPressItem: (item) {
            Navigator.pop(context);
            if (onPickedItem != null) {
              onPickedItem(item);
            }
          },
        );
      },
    ).then((value) => onDismiss != null ? onDismiss() : null);
  }
}

class BottomContent extends StatefulWidget {
  final List<BaseItem> data;
  final String label;
  final BaseItem currentData;
  final OnPickedItem onPressItem;
  final bool showSearchBar;
  final String placeholder;
  final bool showButtonSearch;
  final bool getValueFromSearchBox;
  final BuildContext mainContext;

  BottomContent(
      {this.data,
      this.onPressItem,
      this.label,
      this.currentData,
      this.placeholder,
      this.showButtonSearch = true,
      this.showSearchBar,
      this.mainContext,
      this.getValueFromSearchBox = false});

  @override
  _BottomContentState createState() => _BottomContentState();
}

class _BottomContentState extends State<BottomContent> {
  List<BaseItem> data = [];
  List<BaseItem> dataFilter = [];
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    data = widget.data;
    dataFilter = data;
    super.initState();
  }

  filterData(value) {
    String valueParse = TiengViet.parse(value).toLowerCase();
    var listData = data
        .where((element) => TiengViet.parse(element.name)
            .toLowerCase()
            .replaceAll('đ', 'd')
            .contains(valueParse))
        .toList();
    setState(() => dataFilter = listData);
  }

  @override
  Widget build(BuildContext context) {
    bool showSearch = (widget.data.length > 10 && widget.showSearchBar) ||
        widget.getValueFromSearchBox;

    return SafeArea(
      top: true,
      child: Container(
        height: min(444, Get.height / 2),
        child: ClipRRect(
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(16),
            topRight: Radius.circular(16),
          ),
          child: Container(
            color: Colors.white,
            child: Column(
              children: [
                AppBar(
                  toolbarHeight: kToolbarHeight,
                  backgroundColor: Colors.white,
                  elevation: 0.5,
                  title: Text(
                    widget.label,
                    textAlign: TextAlign.center,
                    style: GoogleFonts.openSans(
                      fontWeight: FontWeight.w500,
                      fontSize: 16,
                      color: AppColor.nearlyBlack,
                    ),
                  ),
                  leading: IconButton(
                    icon: Icon(Icons.close, color: Colors.black),
                    onPressed: () => Navigator.pop(context),
                  ),
                  actions: [],
                ),
                showSearch
                    ? Container(
                        padding: EdgeInsets.only(top: 16, left: 16, right: 16),
                        child: CustomSearchBar(
                          placeholder:
                              widget.placeholder ?? r'Nhập từ khóa tìm kiếm',
                          background: AppColor.backgroundWhite,
                          controller: searchController,
                          showButtons: widget.showButtonSearch,
                          onChanged: filterData,
                        ),
                      )
                    : SizedBox.shrink(),
                Expanded(
                  child: ListView(
                    padding: EdgeInsets.all(8),
                    children: ListTile.divideTiles(
                      context: context,
                      tiles: List.generate(
                        dataFilter.length,
                        (int index) {
                          final item = dataFilter[index];
                          return ListTile(
                            title: Text(
                              item.name,
                              style: GoogleFonts.roboto(),
                            ),
                            onTap: () => widget.onPressItem(item),
                          );
                        },
                      ),
                    ).toList(),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
