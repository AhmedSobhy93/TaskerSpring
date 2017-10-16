package com.tasker.model;

public class Employee {

	private int employee_id;
	public int getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}
	public String getEmployee_name() {
		return employee_name;
	}
	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDepartment() {
		return Department;
	}
	public void setDepartment(String department) {
		Department = department;
	}
	public int getEmployee_manager() {
		return employee_manager;
	}
	public void setEmployee_manager(int employee_manager) {
		this.employee_manager = employee_manager;
	}
	private String employee_name;
	private String userName;
	private String password;
	private String Department;
	private int employee_manager;
	
	
}
