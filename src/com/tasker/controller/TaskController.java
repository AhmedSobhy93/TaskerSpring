package com.tasker.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.tasker.dao.TaskDao;
import com.tasker.model.Task;

@Controller
@RequestMapping(value="/task")
public class TaskController {

	@Autowired
	TaskDao taskDao;
	
	@RequestMapping(value="/tasks",method=RequestMethod.GET)
	public ModelAndView getAllTasks(){
		
		
		return new ModelAndView("");
	}
	
	@RequestMapping(value="/taskform")
	public ModelAndView taskForm(){
		return new ModelAndView("task/taskform", "task-entity", new Task());
	}
	
	@RequestMapping(value="save",method=RequestMethod.POST)
	public ModelAndView save(@ModelAttribute("task")Task task){
		taskDao.save(task);
		return new ModelAndView("index");
	}
}
