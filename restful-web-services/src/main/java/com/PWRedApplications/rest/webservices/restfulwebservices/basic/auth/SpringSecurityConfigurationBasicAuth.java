package com.PWRedApplications.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable();
		http.authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll();
		http.authorizeRequests((requests) -> requests.anyRequest().authenticated());
		//http.formLogin();
		http.httpBasic();
	}
}
