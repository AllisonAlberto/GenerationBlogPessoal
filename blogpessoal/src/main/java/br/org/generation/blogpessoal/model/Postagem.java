package br.org.generation.blogpessoal.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity //Gera tabela
@Table(name = "tb_postagem") //Definir nome da tabela
public class Postagem {
	
	@Id //Informar que é a chave primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Server como o auto_increment
	private long id;
	
	@NotNull(message = "O atributo título é obrigatório!")
	@Size(min = 5, max = 100, message = "O atributo título deve ter no mínimo 5 caracteres e no máximo 100.")
	private String titulo;
	
	@NotNull()
	@Size(min = 10, max = 1020)
	private String texto;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date = new java.sql.Date(System.currentTimeMillis());
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
}
