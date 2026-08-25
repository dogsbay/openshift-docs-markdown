# Binary example applications {id="odo-sample-applications-binary_{{ context }}"}

Use the following commands to build and run sample applications from a binary file for a particular runtime.

## java {id="odo-sample-applications-binary-java_{{ context }}"}

Java can be used to deploy a binary artifact as follows:

```terminal
$ git clone https://github.com/spring-projects/spring-petclinic.git
```

```terminal
$ cd spring-petclinic
```

```terminal
$ mvn package
```

```terminal
$ odo create java test3 --binary target/*.jar
```

```terminal
$ odo push
```