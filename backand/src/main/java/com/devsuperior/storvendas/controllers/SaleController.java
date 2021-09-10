package com.devsuperior.storvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.storvendas.dto.SaleDTO;
import com.devsuperior.storvendas.dto.SaleSumDTO;
import com.devsuperior.storvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable page){
		Page<SaleDTO> lista = service.findAll(page);
		return ResponseEntity.ok(lista);
	}
	
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupBySeller(){
		List<SaleSumDTO> lista = service.amountGroupBySeller();
		return ResponseEntity.ok(lista);
	}
	
}
