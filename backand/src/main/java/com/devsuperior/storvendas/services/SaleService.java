package com.devsuperior.storvendas.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.storvendas.dto.SaleDTO;
import com.devsuperior.storvendas.entitys.Sale;
import com.devsuperior.storvendas.repositorys.SaleRepository;
import com.devsuperior.storvendas.repositorys.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable page){
		sellerRepository.findAll();
		
		Page<Sale> result = repository.findAll(page);
		return result.map(x -> new SaleDTO(x));
	}
	

}
