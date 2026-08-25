# Git repository sample application examples {id="odo-sample-applications-github_{{ context }}"}

Use the following commands to build and run sample applications from a Git repository for a particular runtime.

## httpd {id="odo-sample-applications-github-httpd_{{ context }}"}

This example helps build and serve static content using httpd on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see the [Apache HTTP Server container image repository](https://github.com/sclorg/httpd-container/blob/master/2.4/root/usr/share/container-scripts/httpd/README.md).

```terminal
$ odo create httpd --git https://github.com/openshift/httpd-ex.git
```

## java {id="odo-sample-applications-github-java_{{ context }}"}

This example helps build and run fat JAR Java applications on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see the [Java S2I Builder image](https://github.com/fabric8io-images/s2i/blob/master/README.md).

```terminal
$ odo create java --git https://github.com/spring-projects/spring-petclinic.git
```

## nodejs {id="odo-sample-applications-github-nodejs_{{ context }}"}

Build and run Node.js applications on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see the [Node.js 8 container image](https://github.com/sclorg/s2i-nodejs-container/blob/master/8/README.md).

```terminal
$ odo create nodejs --git https://github.com/openshift/nodejs-ex.git
```

## perl {id="odo-sample-applications-github-perl_{{ context }}"}

This example helps build and run Perl applications on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see the [Perl 5.26 container image](https://github.com/sclorg/s2i-perl-container/blob/master/5.26/README.md).

```terminal
$ odo create perl --git https://github.com/openshift/dancer-ex.git
```

## php {id="odo-sample-applications-github-php_{{ context }}"}

This example helps build and run PHP applications on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see the [PHP 7.1 Docker image](https://github.com/sclorg/s2i-php-container/blob/master/7.1/README.md).

```terminal
$ odo create php --git https://github.com/openshift/cakephp-ex.git
```

## python {id="odo-sample-applications-github-python_{{ context }}"}

This example helps build and run Python applications on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see the [Python 3.6 container image](https://github.com/sclorg/s2i-python-container/blob/master/3.6/README.md).

```terminal
$ odo create python --git https://github.com/openshift/django-ex.git
```

## ruby {id="odo-sample-applications-github-ruby_{{ context }}"}

This example helps build and run Ruby applications on CentOS 7. For more information about using this builder image, including {{ product_title }} considerations, see [Ruby 2.5 container image](https://github.com/sclorg/s2i-ruby-container/blob/master/2.5/README.md).

```terminal
$ odo create ruby --git https://github.com/openshift/ruby-ex.git
```