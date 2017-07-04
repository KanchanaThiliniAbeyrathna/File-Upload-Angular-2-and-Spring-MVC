package application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@EnableWebMvc
@EnableScheduling
@ComponentScan({ "fileupload", "controller" })
public class AppConfig extends WebMvcConfigurerAdapter
{
	public static final int UPLOAD_SIZE = 10000000;
	 
	@Bean(name = "multipartResolver")
	public CommonsMultipartResolver multipartResolver()
	{
	  CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
	  multipartResolver.setMaxUploadSize( UPLOAD_SIZE );
	  return new CommonsMultipartResolver();
	}
}

