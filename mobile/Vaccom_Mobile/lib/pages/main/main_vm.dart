import 'package:vaccom_mobile/model/dashboard.dart';
import 'package:vaccom_mobile/model/summary.dart';
import 'package:vaccom_mobile/network/api/api.dart';
import 'package:vaccom_mobile/view_model/base.dart';

class MainViewModel extends BaseViewModel {
  Future<Summary> getSummary() async {
    try {
      var res = await VacNetwork.getData(
        uri: 'https://tiemchungcovid19.gov.vn/api/public/dashboard/vaccination-statistics/summary',
      );
      return Summary.fromJson(res);
    } catch (e) {
      throw e;
    }
  }

  Future<Dashboard> getDashboard() async {
    try {
      var res = await VacNetwork.getData(
        uri: 'https://tiemchungcovid19.gov.vn/api/public/dashboard/vaccination-statistics/get-detail-latest',
      );
      return Dashboard.fromJson(res);
    } catch (e) {
      throw e;
    }
  }
}