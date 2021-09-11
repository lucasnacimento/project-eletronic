package com.devsuperior.storvendas.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.storvendas.dto.SaleSucessDTO;
import com.devsuperior.storvendas.dto.SaleSumDTO;
import com.devsuperior.storvendas.entitys.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query("SELECT new com.devsuperior.storvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupBySeller();
	
	@Query("SELECT new com.devsuperior.storvendas.dto.SaleSucessDTO(obj.seller, SUM(obj.visited),SUM(obj.deals))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSucessDTO> sucessGroupBySeller();
}
