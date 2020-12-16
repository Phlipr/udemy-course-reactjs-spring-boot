package com.PWRedApplications.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "PReynolds", "Learn to code ReactJS and Java Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "PReynolds", "Learn about Hibernate", new Date(), false));
		todos.add(new Todo(++idCounter, "PReynolds", "Learn about AWS", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
}
