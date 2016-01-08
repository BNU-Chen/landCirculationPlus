package cn.edu.bnu.land.service;


import java.util.List;

import java.util.Map;
import java.util.TreeMap;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import cn.edu.bnu.land.model.Jsdatafield2;
import cn.edu.bnu.land.model.Jsdatafield2Home;


@Service
public class Jsdatafield2Service {
	private Jsdatafield2Home jsdatafield2Home;
	private SessionFactory sessionFactory;
	private Jsdatafield2 jsdatafield2;
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory){
		this.sessionFactory=sessionFactory;
	}
	@Autowired
	public void setJsdatafieldHome(Jsdatafield2Home jsdatafield2Home){
		this.jsdatafield2Home = jsdatafield2Home;
	}
	
	public Map<String,Object>  lookdataField2(String start,String limit){
		System.out.println("look localdata field");
		System.out.println("localdata field start:"+start);
		System.out.println("localdata field limit:"+limit);
		String totalCount =  new String();
		String hql="from Jsdatafield2 as jsdatafield2";
		List<Jsdatafield2> results = null;
	    try{
	    	org.hibernate.Query query=sessionFactory.getCurrentSession().createQuery(hql);
			if(!query.list().isEmpty())
				totalCount=String.valueOf(query.list().size());//获取此次搜索结果的总记录数
			query.setFirstResult(Integer.parseInt(start));//设置所有结果的首记录位置
			query.setMaxResults(Integer.parseInt(limit));//设置所有结果的每页显示的记录数
	    	results=query.list();
//	    	for(Jsfieldmapping jsfieldmapping:results){
//	    		System.out.println(jsfieldmapping.getId()+ jsfieldmapping.getFieldmapping());
//	    	}	    
	    	
	    	
			results = (List<Jsdatafield2>)query.list(); 
			for (Jsdatafield2 i : results) { 
				System.out.println(i.getId()+"  " + i.getLocaldataField()); 
			} 
	    }
		catch(Exception e){
			e.printStackTrace();
		}	
				

		
		Map<String,Object> myMapResult = new TreeMap<String,Object>();
		System.out.println("本地字段映射表查询记录总数："+ totalCount);
		myMapResult.put("total", new String(totalCount));
		myMapResult.put("root", results);
		return myMapResult;	

	}
	
	   public void addlocaldata(Jsdatafield2 jsdatafield2){	
	      	System.out.println("add_Jsdatafield2 service!");
	    	Session session = sessionFactory.getCurrentSession(); 	

	     	String localdataField = jsdatafield2.getLocaldataField();
	     	
	     	System.out.println("localdatafield:" + localdataField);
	     	jsdatafield2.setLocaldataField(localdataField);;
	     	
	     	session.save(jsdatafield2); 	
		}
	
		/**
		 * 根据id删除crawlkeywords表中记录。多条id之间使用','分隔
		 * 
		**/
		public void deleteJsdatafield2(String ids){
			String[] idsArray=ids.split(",");
			for (int i=0;i<idsArray.length;i++){
				String hql="delete from Jsdatafield2 where id="+idsArray[i];
				System.out.println(hql);
				Session session = sessionFactory.getCurrentSession();
				Query q=session.createQuery(hql);
				q.executeUpdate();
			}
		}
}
