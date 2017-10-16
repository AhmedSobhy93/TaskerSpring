package com.tasker.dao;

import org.springframework.jdbc.core.JdbcTemplate;

import com.tasker.model.Task;

public class TaskDao {

JdbcTemplate jdbcTemplate;
	
	
	public void setTemplate(JdbcTemplate temp){
		this.jdbcTemplate=temp;
	}
	
	public int save(Task task){
		String sql="INSERT INTO task(task_id, description, start_date, end_date, title, actual_hours, task_status, task_owner)"+
				"VALUES ("+task.getTask_id()+",'"+task.getDescription()+"','"+task.getStart_date()+"','"+task.getEnd_date()+"','"+task.getTitle()+"','"+task.getActual_hours()+"','"+task.getTask_status()+"','"+task.getTask_owner()+"')";
		return jdbcTemplate.update(sql);
	}
	
	
}
