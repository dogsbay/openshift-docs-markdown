{%- set _mod_docs_content_type = "REFERENCE" %}
# Quarkus function template structure {id="serverless-quarkus-template_{{ context }}"}

When you create a Quarkus function by using the Knative (`kn`) CLI, the project directory looks similar to a typical Maven project. Additionally, the project contains the `func.yaml` file, which is used for configuring the function.

Both `http` and `event` trigger functions have the same template structure:

```terminal title="Template structure"
.
├── func.yaml (1)
├── mvnw
├── mvnw.cmd
├── pom.xml (2)
├── README.md
└── src
    ├── main
    │   ├── java
    │   │   └── functions
    │   │       ├── Function.java (3)
    │   │       ├── Input.java
    │   │       └── Output.java
    │   └── resources
    │       └── application.properties
    └── test
        └── java
            └── functions (4)
                ├── FunctionTest.java
                └── NativeFunctionIT.java
```
1.  Used to determine the image name and registry.
1.  The Project Object Model (POM) file contains project configuration, such as information about dependencies. You can add additional dependencies by modifying this file.
    ```xml title="Example of additional dependencies"
    ...
      <dependencies>
        <dependency>
          <groupId>junit</groupId>
          <artifactId>junit</artifactId>
          <version>4.21</version>
          <scope>test</scope>
        </dependency>
        <dependency>
          <groupId>org.assertj</groupId>
          <artifactId>assertj-core</artifactId>
          <version>3.8.0</version>
          <scope>test</scope>
        </dependency>
      </dependencies>
    ...
    ```

    Dependencies are downloaded during the first compilation.
1.  The function project must contain a Java method annotated with `@Funq`. You can place this method in the `Function.java` class.
1.  Contains simple test cases that can be used to test your function locally.