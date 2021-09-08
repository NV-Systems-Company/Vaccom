import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:vaccom_mobile/commons/color.dart';
import 'package:vaccom_mobile/commons/toast.dart';
import 'package:vaccom_mobile/components/base_scaffold.dart';
import 'package:vaccom_mobile/components/coordinator.dart';
import 'package:vaccom_mobile/components/custom_input.dart';
import 'package:vaccom_mobile/components/text_box.dart';
import 'package:vaccom_mobile/components/vac_button.dart';
import 'package:vaccom_mobile/network/response/response.dart';
import 'package:vaccom_mobile/pages/injector/register/new_injector_vm.dart';

enum InjectorType { add, update }

extension InjectorTypeName on InjectorType {
  String get name {
    switch (this) {
      case InjectorType.update:
        return r'Cập nhật thông tin';
      default:
        return r'Đăng ký tiêm mới';
    }
  }
}

/// Đăng ký tiêm mới
class NewInjectorPage extends StatefulWidget {
  final NguoiTiemChung injectUser;
  final String title;

  const NewInjectorPage({this.injectUser, this.title});

  @override
  State createState() => _NewInjectorPageState();
}

class _NewInjectorPageState extends State<NewInjectorPage> {
  final viewModel = NewInjectorViewModel();

  @override
  void initState() {
    viewModel.injector = widget.injectUser;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BaseScaffoldWidget(
      title: r'Đăng ký tiêm mới',
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Container(
            child: Column(
              children: [
                CustomInput(
                  title: r'Họ và tên',
                  isRequired: true,
                  initialText: viewModel.injector.hoVaTen,
                  onChanged: (t) => viewModel.injector.hoVaTen = t,
                ),
                CustomInput(
                  title: r'Ngày sinh',
                  hintText: r'dd/MM/yyyy, ddMMyyyy',
                  isRequired: true,
                  initialText: viewModel.injector.ngaySinh,
                  onChanged: (text) => viewModel.injector.ngaySinh = text,
                ),
                CustomInput(
                  title: r'Giới tính',
                  isButton: true,
                  value: viewModel.injector.gender,
                  initialText: viewModel.injector.gender,
                  onTap: () async {
                    Coordinator.showActionSheetBar(
                      mainContext: context,
                      title: r'Chọn giới tính',
                      data: NguoiTiemChung.genders,
                      onPickedItem: (gender) {
                        setState(() => viewModel.injector.gioiTinh = gender.id);
                      }
                    );
                  },
                ),
                CustomInput(
                  title: r'Số CMND/CCCD',
                  isRequired: true,
                  initialText: viewModel.injector.cmtcccd,
                  onChanged: (t) => viewModel.injector.cmtcccd = t,
                ),
                CustomInput(
                  title: r'Số thẻ BHYT',
                  initialText: viewModel.injector.soTheBhyt,
                  onChanged: (text) {},
                ),
                CustomInput(
                  title: r'Số điện thoại',
                  isRequired: true,
                  initialText: viewModel.injector.soDienThoai,
                  onChanged: (t) => viewModel.injector.soDienThoai = t,
                ),
                CustomInput(
                  title: r'Email',
                  initialText: viewModel.injector.email,
                  keyboardType: TextInputType.emailAddress,
                  onChanged: (t) => viewModel.injector.email = t,
                ),
                CustomInput(
                  title: r'Tỉnh/ Thành phố',
                  isRequired: true,
                  isButton: true,
                  initialText: viewModel.injector.tinhThanhTen,
                  onTap: () {
                    Toast.show(text: r'Tỉnh/ Thành phố');
                  },
                ),
                CustomInput(
                  title: r'Quận/ Huyện',
                  isRequired: true,
                  isButton: true,
                  initialText: viewModel.injector.quanHuyenTen,
                  onTap: () {
                    Toast.show(text: r'Quận/ Huyện');
                  },
                ),
                CustomInput(
                  title: r'Phường/ Xã',
                  initialText: viewModel.injector.phuongXaTen,
                  isRequired: true,
                  isButton: true,
                  onTap: () {
                    Toast.show(text: r'Phường/ Xã');
                  },
                ),
                CustomInput(
                  title: r'Địa chỉ nơi ở',
                  hintText: r'Số nhà, đường, tổ dân phố, khóm ấp, thôn bản',
                  isRequired: true,
                  initialText: viewModel.injector.diaChiNoiO,
                  onChanged: (t) => viewModel.injector.diaChiNoiO = t,
                ),
                CustomInput(
                  title: r'Nhóm đối tượng',
                  isRequired: true,
                  isButton: true,
                  // initialText: viewModel.injector.nhomDoiTuong,
                  onTap: () {
                    Toast.show(text: r'Nhóm đối tượng');
                  },
                ),
                CustomInput(
                  title: r'Đơn vị công tác',
                  isRequired: true,
                  initialText: viewModel.injector.donViCongTac,
                  onChanged: (t) => viewModel.injector.donViCongTac = t,
                ),
                CustomInput(
                  title: r'Cơ sở y tế',
                  initialText: viewModel.injector.coSoYTeTen,
                  isRequired: true,
                  isButton: true,
                  onTap: () {
                    Toast.show(text: r'Cơ sở y tế');
                  },
                ),
                // CustomInput(
                //   title: r'Địa bàn cơ sở',
                //   isButton: true,
                //   onTap: () {
                //     Toast.show(text: r'Địa bàn cơ sở');
                //   },
                // ),
                CustomInput(
                  title: r'Dân tộc',
                  initialText: viewModel.injector.danTocMa,
                  isButton: true,
                  onTap: () {
                    Toast.show(text: r'Dân tộc');
                  },
                ),
                CustomInput(
                  title: r'Quốc tịch',
                  initialText: viewModel.injector.quocTichMa,
                  isButton: true,
                  onTap: () {
                    Toast.show(text: r'Quốc tịch');
                  },
                ),
                TextBox(
                  title: r'Tiền sử dị ứng',
                  onChanged: (t) => viewModel.injector.tienSuDiUng = t,
                ),
                TextBox(
                  title: r'Các bệnh lý đang mắc',
                  onChanged: (t) => viewModel.injector.cacBenhLyDangMac = t,
                ),
                TextBox(
                  title: r'Các thuốc đang dùng',
                  onChanged: (t) => viewModel.injector.cacThuocDangDung = t,
                ),
                CustomInput(
                  title: r'Ngày đăng ký tiêm',
                  hintText: r'dd/MM/yyyy, ddMMyyyy',
                  onChanged: (t) => viewModel.injector.ngayDangKi = t,
                ),
                CustomInput(
                  title: r'Lưu ý',
                  hintText: r'',
                  onChanged: (t) => viewModel.injector.ghiChu = t,
                ),
                Container(
                  height: 54,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      VacButton(
                        title: r'Hủy',
                        color: AppColor.error,
                        onTap: () => Get.back(),
                      ),
                      SizedBox(width: 16),
                      VacButton(
                        title: r'Đăng ký tiêm',
                        color: AppColor.main,
                        icon: Icons.save,
                        onTap: addInjector,
                      )
                    ],
                  ),
                ),
                SizedBox(
                  height: MediaQuery.of(context).padding.bottom,
                )
              ],
            ),
          ),
        ),
      ),
    );
  }

  /// PRIVATE METHOD
  void addInjector() {
    if (viewModel.invalidInjector()) {
      Toast.show(
        text: r'Các thông tin có dấu (*) là bắt buộc',
      );
      return;
    }
  }
}
