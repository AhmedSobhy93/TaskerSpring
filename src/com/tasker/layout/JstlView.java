package com.tasker.layout;

import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.InternalResourceView;

public class JstlView extends InternalResourceView{

	@Override
	 protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
	 
     // Expose the model object as request attributes.
	 exposeModelAsRequestAttributes(model,request);

	 // Determine the path for the request dispatcher.
	 String dispatcherPath = prepareForRendering(request, response);
	 
	 // set original view being asked for as a request parameter
	 request.setAttribute("partial", dispatcherPath.substring(dispatcherPath.indexOf("Tasker/",1) + 1));
	 
	// force everything to be template.jsp
	 RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/jsp/template.jsp");
	 requestDispatcher.include(request, response);
	 
	 }
}
