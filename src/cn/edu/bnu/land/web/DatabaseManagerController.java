package cn.edu.bnu.land.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.edu.bnu.land.common.Encoder;
import cn.edu.bnu.land.model.DbBlacklist;
import cn.edu.bnu.land.model.Users;
import cn.edu.bnu.land.service.DatabaseManagerService;


@Controller
public class DatabaseManagerController {
	private DatabaseManagerService databaseManagerService;


	@Autowired
	public DatabaseManagerController(DatabaseManagerService databaseManagerService) {
		this.databaseManagerService = databaseManagerService;
	}


	@RequestMapping(value = "/get_BackupRecoveryList", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> handle(
			@RequestParam("start") String start,
			@RequestParam("limit") String limit
			) throws IOException {

		// System.out.println("time to getInfoArticleList");
		// System.out.println(start);
		// System.out.println(limit);
		// System.out.println();
		Map<String, Object> myBackupRecordList = this.databaseManagerService.getBackupData(start, limit);
		System.out.println("backupRecord Count:"+myBackupRecordList.get("total"));
		return (myBackupRecordList);
	}
	
	// ----------------------------------企业黑名单Black-------------------------------
		// 查询用户信息
		@RequestMapping(value = "/get_Blacklist")
		// ,method=RequestMethod.POST
		@ResponseBody
		public Map<String, Object> getBlacklist(
				@RequestParam("searchKeyword") String searchKeyword)
				throws IOException {
			System.out.println("searchKeyword : " + searchKeyword);
			searchKeyword = Encoder.encode(searchKeyword);
			return this.databaseManagerService.getDbBlacklist(searchKeyword);					
		}

		// 删除用户信息
		@RequestMapping(value = "/del_BlackById")
		// ,method=RequestMethod.POST)
		@ResponseBody
		public void delBlackById(@RequestParam("ids") String[] ids)
				throws IOException {
			this.databaseManagerService.deleteBlackById(ids);
		}

		// 添加用户信息
		@RequestMapping(value = "/add_BlackCompany")
		@ResponseBody
		public Map<String, Object> addBlackCompany(@RequestBody DbBlacklist blacklist)
				throws IOException {
			// System.out.println("addUserInfo :"+userInfo);
			this.databaseManagerService.addBlackInfo(blacklist);
			Map<String, Object> userInfoResults = new HashMap<String, Object>();
			userInfoResults.put("success", true);
			userInfoResults.put("msg", ",successfully saved");
			return (userInfoResults);
		}

		// 修改用户信息
		@RequestMapping(value = "/update_BlackInfo")
		// ,method=RequestMethod.POST)
		@ResponseBody
		public void updateBlackInfo(@RequestBody DbBlacklist black) throws IOException {
			System.out.println("update_userInfo: " + black.getUsername());
			this.databaseManagerService.updateBlackInfo(black);
		}

}