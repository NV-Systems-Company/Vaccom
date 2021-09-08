import 'package:vaccom_mobile/model/base_item.dart';
import 'package:vaccom_mobile/network/response/response.dart';
import 'package:vaccom_mobile/view_model/base.dart';

class NewInjectorViewModel extends BaseViewModel {
  var injector = NguoiTiemChung();

  bool invalidInjector() {
    if (injector.hoVaTen == null || injector.hoVaTen.isEmpty) {
      return true;
    }

    if (injector.dateOfBirth == null) {
      return true;
    }

    if (injector.cmtcccd == null || injector.cmtcccd.isEmpty) {
      return true;
    }

    if (injector.soDienThoai == null || injector.soDienThoai.isEmpty) {
      return true;
    }

    if (injector.tinhThanhMa == null || injector.tinhThanhMa.isEmpty) {
      return true;
    }

    if (injector.quanHuyenMa == null || injector.quanHuyenMa.isEmpty) {
      return true;
    }

    if (injector.phuongXaMa == null || injector.phuongXaMa.isEmpty) {
      return true;
    }

    if (injector.diaChiNoiO == null || injector.diaChiNoiO.isEmpty) {
      return true;
    }

    if (injector.nhomDoiTuong == null) {
      return true;
    }

    if (injector.donViCongTac == null || injector.donViCongTac.isEmpty) {
      return true;
    }

    if (injector.coSoYTeMa == null || injector.coSoYTeMa.isEmpty) {
      return true;
    }

    return false;
  }
}
