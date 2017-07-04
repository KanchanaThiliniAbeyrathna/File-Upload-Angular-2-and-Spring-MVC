package application;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class AppInitializer implements WebApplicationInitializer
{

	@Override
	public void onStartup( ServletContext servletContext ) throws ServletException
	{
		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
		rootContext.register( AppConfig.class );
		rootContext.setServletContext( servletContext );
		servletContext.addListener( new ContextLoaderListener( rootContext ) );
		ServletRegistration.Dynamic dispatcher = servletContext.addServlet( "dispatcher",
				new DispatcherServlet( rootContext ) );
		dispatcher.addMapping( "/" );
		dispatcher.setLoadOnStartup( 1 );

		FilterRegistration.Dynamic corsFilter = servletContext.addFilter( "corsFilter", CORSFilter.class );
		corsFilter.addMappingForUrlPatterns( null, false, "/*" );
	}
}