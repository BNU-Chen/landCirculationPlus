package cn.edu.bnu.land.model;

// Generated 2014-5-18 23:58:44 by Hibernate Tools 4.0.0

import java.util.Date;

import org.springframework.stereotype.Repository;

/**
 * Zbjcgl generated by hbm2java
 */
@Repository
public class Zbjcgl implements java.io.Serializable {

	private Integer id;
	private Integer jcid;
	private String jcfmc;
	private String jcbh;
	private Boolean lrlc;
	private String crlx;
	private Float cred;
	private Date crrq;
	private Boolean sfjs;
	private String bz;
	private String qt;

	public Zbjcgl() {
	}

	public Zbjcgl(Integer jcid, String jcfmc, String jcbh, Boolean lrlc,
			String crlx, Float cred, Date crrq, Boolean sfjs, String bz,
			String qt) {
		this.jcid = jcid;
		this.jcfmc = jcfmc;
		this.jcbh = jcbh;
		this.lrlc = lrlc;
		this.crlx = crlx;
		this.cred = cred;
		this.crrq = crrq;
		this.sfjs = sfjs;
		this.bz = bz;
		this.qt = qt;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getJcid() {
		return this.jcid;
	}

	public void setJcid(Integer jcid) {
		this.jcid = jcid;
	}

	public String getJcfmc() {
		return this.jcfmc;
	}

	public void setJcfmc(String jcfmc) {
		this.jcfmc = jcfmc;
	}

	public String getJcbh() {
		return this.jcbh;
	}

	public void setJcbh(String jcbh) {
		this.jcbh = jcbh;
	}

	public Boolean getLrlc() {
		return this.lrlc;
	}

	public void setLrlc(Boolean lrlc) {
		this.lrlc = lrlc;
	}

	public String getCrlx() {
		return this.crlx;
	}

	public void setCrlx(String crlx) {
		this.crlx = crlx;
	}

	public Float getCred() {
		return this.cred;
	}

	public void setCred(Float cred) {
		this.cred = cred;
	}

	public Date getCrrq() {
		return this.crrq;
	}

	public void setCrrq(Date crrq) {
		this.crrq = crrq;
	}

	public Boolean getSfjs() {
		return this.sfjs;
	}

	public void setSfjs(Boolean sfjs) {
		this.sfjs = sfjs;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getQt() {
		return this.qt;
	}

	public void setQt(String qt) {
		this.qt = qt;
	}

}
