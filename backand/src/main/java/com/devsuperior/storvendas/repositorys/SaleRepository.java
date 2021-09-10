package com.devsuperior.storvendas.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.storvendas.entitys.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
