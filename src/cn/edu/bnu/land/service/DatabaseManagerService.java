package cn.edu.bnu.land.service;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.edu.bnu.land.model.DbBackuprecord;
import cn.edu.bnu.land.model.DbBackuprecordHome;
import cn.edu.bnu.land.model.DbBlacklist;

@Service
public class DatabaseManagerService {
	private DbBackuprecordHome backuprecordHome;
	private SessionFactory sessionFactory;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Autowired
	public void setDbBackuprecordHome(DbBackuprecordHome backuprecordHome) {
		this.backuprecordHome = backuprecordHome;
	}

	//-------------数据库备份---------------------
	public Map<String, Object> getBackupData(String start, String limit) {
		// return this.infoArticleHome.selectInfoArticleList(start, limit);
		// System.out.println("time is getInfoArticleList @InfoArticleService ");
		// System.out.println("start"+start);
		// System.out.println("limit"+limit);
		String hql = " from DbBackuprecord ";
		System.out.println(hql);
		String totalConut = null;
		List<DbBackuprecord> results = null;
		try {
			org.hibernate.Query query = sessionFactory.getCurrentSession().createQuery(hql);
			totalConut = String.valueOf(query.list().size());
			//System.out.println(totalConut);
			query.setFirstResult(Integer.parseInt(start));
			query.setMaxResults(Integer.parseInt(limit));
			results = (List<DbBackuprecord>) query.list();
		} catch (Exception e) {
			e.printStackTrace();
		}

		Map<String, Object> myMapResult = new TreeMap<String, Object>();
		myMapResult.put("total", totalConut);
		myMapResult.put("root", results);
		System.out.println("backup service: count: "+totalConut);

		return myMapResult;

	}
	
	// -----------------------------企业黑名单dbBlacklist---------------------------
		// 查询企业黑名单
		@SuppressWarnings("unchecked")
		public Map<String, Object> getDbBlacklist(String searchKey) {
			System.out.println("进入getUsersList函数-----");
			String hql = "FROM DbBlacklist as bl";
			if (!searchKey.equals("")) {
				String hql2 = " WHERE bl.username LIKE '%" + searchKey + "%'"
						+ "OR bl.companyname LIKE '%" + searchKey + "%'"
						+ " OR bl.reason LIKE '%" + searchKey + "%'";
				hql = hql + hql2;
			}
			System.out.println(hql);
			List<DbBlacklist> results = null;
			org.hibernate.Query query = sessionFactory.getCurrentSession()
					.createQuery(hql);
			results = (List<DbBlacklist>) query.list();
			Map<String, Object> myMapResult = new TreeMap<String, Object>();
			myMapResult.put("root", results);
			myMapResult.put("success", true);
			return myMapResult;
		}

		// 删除用户信息
		public void deleteBlackById(String[] ids) {
			DbBlacklist result = null;
			Session session = sessionFactory.getCurrentSession();

			try {
				for (int i = 0; i < ids.length; i++) {
					result = (DbBlacklist) session.get(DbBlacklist.class,
							Integer.parseInt(ids[i]));
					session.delete(result);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		// 添加用户信息
		@SuppressWarnings("unchecked")
		public void addBlackInfo(DbBlacklist black) {
			Session session = sessionFactory.getCurrentSession();
			try {
				session.save(black);
			} catch (Exception er) {
				System.out.println(er.getMessage());
			}
		}

		// 编辑更新用户信息
		public void updateBlackInfo(DbBlacklist black) {
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(black);
		}



}