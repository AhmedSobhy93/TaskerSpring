<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
  
        <h1>Add New Task</h1>  
       <form:form method="post" commandName="task-entity"  action="save">    
        <table >    
         <tr>    
          <td>Task Title : </td>   
          <td><form:input path="title"  /></td>  
         </tr>    
         <tr>    
          <td>Description :</td>    
          <td><form:input path="description" /></td>  
         </tr>   
         <tr>    
          <td>start_date :</td>    
          <td><form:input path="start_date" /></td>  
         </tr>  
         <tr>    
          <td> end_date   :</td>    
          <td><form:input path="end_date" /></td>  
         </tr> 
         <tr>    
          <td> actual_hours   :</td>    
          <td><form:input path="actual_hours" /></td>  
         </tr>
          <tr>
         <td><form:label path="task_status">Country</form:label></td>
         <td>
            <form:select path="task_status">
               <form:option value="1" label="InProgress"/>
               <form:option value="2" label="Done"/>
               <form:option value="3" label="Pending"/>
            </form:select>     	
         </td>
      </tr>   
          <form:hidden path="task_owner" value="7"/>
         <tr>         
          <td> </td>    
          <td><input type="submit" value="Save" /></td>    
         </tr>    
        </table>    
       </form:form>    