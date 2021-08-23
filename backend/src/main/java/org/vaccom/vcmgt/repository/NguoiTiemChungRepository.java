package org.vaccom.vcmgt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.vaccom.vcmgt.constant.DBConstant;
import org.vaccom.vcmgt.entity.NguoiTiemChung;

/**
 * @author vaccom
 *
 */
@Repository
@Transactional
public interface NguoiTiemChungRepository extends JpaRepository<NguoiTiemChung, Long> {

	public long countByDiaBanCoSoId(long id);

	public NguoiTiemChung findById(long id);

	public NguoiTiemChung findByCmtcccd(String cmtcccd);
	
	
	@Query(value = "SELECT count(*) FROM " + DBConstant._NGUOITIEMCHUNG_TABLE_NAME
			+ " n WHERE n.CMTCCCD = :cmtcccd AND n.NhomDoiTuong = :nhomdoituong AND n.NgayDangKi = :ngaydangki AND n.HoVaTen LIKE :hovaten AND n.DiaBanCoSoID = :diabancosoid AND n.CoSoYTeMa = :cosoytema", nativeQuery = true)

	public long countNguoiTiemChung(@Param(value = "cmtcccd") String cmtcccd,
			@Param(value = "nhomdoituong") Integer nhomdoituong, @Param(value = "ngaydangki") String ngaydangki,
			@Param(value = "hovaten") String hovaten, @Param(value = "diabancosoid") Long diabancosoid,
			@Param(value = "cosoytema") String cosoytema);

	@Query(value = "SELECT * FROM " + DBConstant._NGUOITIEMCHUNG_TABLE_NAME
			+ " n WHERE n.CMTCCCD = :cmtcccd AND n.NhomDoiTuong = :nhomdoituong AND n.NgayDangKi = :ngaydangki AND n.HoVaTen LIKE :hovaten AND n.DiaBanCoSoID = :diabancosoid AND n.CoSoYTeMa = :cosoytema LIMIT :page, :size", nativeQuery = true)

	public List<NguoiTiemChung> searchNguoiTiemChung(@Param(value = "cmtcccd") String cmtcccd,
			@Param(value = "nhomdoituong") Integer nhomdoituong, @Param(value = "ngaydangki") String ngaydangki,
			@Param(value = "hovaten") String hovaten, @Param(value = "diabancosoid") Long diabancosoid,
			@Param(value = "cosoytema") String cosoytema, @Param(value = "page") Integer page,
			@Param(value = "size") Integer size);
	

}
