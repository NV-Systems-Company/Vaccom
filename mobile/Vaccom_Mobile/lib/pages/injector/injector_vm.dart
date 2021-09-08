import 'package:rxdart/rxdart.dart';
import 'package:vaccom_mobile/commons/utils.dart';
import 'package:vaccom_mobile/model/search_query.dart';
import 'package:vaccom_mobile/network/response/response.dart';
import 'package:vaccom_mobile/view_model/base.dart';

class InjectorViewModel extends BaseViewModel {
  final _injectors = BehaviorSubject<InjectorPaging>();

  Stream<InjectorPaging> get injectorsStream => _injectors.stream;

  Function(InjectorPaging) get injectorsChanged => _injectors.sink.add;

  List<NguoiTiemChung> get injectors => _injectors.value.data;

  void getInjectors({SearchQuery param}) {
    api
        .getListNguoiTiemChung(params: param.toJson())
        .then((value) => injectorsChanged(value))
        .catchError((e) {
      logger.info(e.toString());
      injectorsChanged(null);
    });
  }

  @override
  void dispose() {
    super.dispose();

    _injectors.close();
  }
}
