package com.tasker.model;

public class Task {

	private int task_id;
	private String title;
	private String description;
	private String start_date;
	private String end_date;
	private String actual_hours;
	//1 for done * 2 for pending * 3 for in progress
	private String task_status;
	private int task_owner;
	
	public int getTask_id() {
		return task_id;
	}
	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	public String getActual_hours() {
		return actual_hours;
	}
	public void setActual_hours(String actual_hours) {
		this.actual_hours = actual_hours;
	}
	public String getTask_status() {
		return task_status;
	}
	public void setTask_status(String task_status) {
		this.task_status = task_status;
	}
	public int getTask_owner() {
		return task_owner;
	}
	public void setTask_owner(int task_owner) {
		this.task_owner = task_owner;
	}
	
	
}
