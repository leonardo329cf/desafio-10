package com.devsuperior.movieflix.dto;

import java.util.Objects;

import com.devsuperior.movieflix.entities.Genre;

public class GenreDto {

	private Long id;
	private String name;
	
	public GenreDto(Genre entity) {
		this.id = entity.getId();
		this.name = entity.getName();
	}
	
	public GenreDto(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		GenreDto other = (GenreDto) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "GenreDto [id=" + id + ", name=" + name + "]";
	}
	
	
}
