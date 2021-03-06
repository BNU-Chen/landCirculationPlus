package cn.edu.bnu.land.model;

// Generated 2013-8-16 10:11:45 by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * Transinfo generated by hbm2java
 */
public class Transinfo implements java.io.Serializable {

	private Integer number;
	private String region;
	private Integer acre;
	private String transtyle;
	private Integer year;
	private String price;
	private Date releasedate;
	
	private String title;
	
	private String url;
	public Transinfo() {
	}

	public Transinfo(String region, Integer acre, String transtyle, Integer year,
			String price, Date releasedate,String title,String text,String detail,String remark,String url) {
		this.region = region;
		this.acre = acre;
		this.transtyle = transtyle;
		this.year = year;
		this.price = price;
		this.releasedate = releasedate;
		this.title= title;
		
		this.url = url;
	}



	public Integer getAcre() {
		return this.acre;
	}

	public void setAcre(Integer acre) {
		this.acre = acre;
	}

	public String getTranstyle() {
		return this.transtyle;
	}

	public void setTranstyle(String transtyle) {
		this.transtyle = transtyle;
	}

	public Integer getYear() {
		return this.year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getPrice() {
		return this.price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Date getReleasedate() {
		return this.releasedate;
	}

	public void setReleasedate(Date releasedate) {
		this.releasedate = releasedate;
	}



	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	

	

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
