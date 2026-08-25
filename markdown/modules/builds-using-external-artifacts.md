{%- set _mod_docs_content_type = "PROCEDURE" %}
# External artifacts {id="builds-using-external-artifacts_{{ context }}"}

It is not recommended to store binary files in a source repository. Therefore, you must define a build which pulls additional files, such as Java `.jar` dependencies, during the build process. How this is done depends on the build strategy you are using.

For a Source build strategy, you must put appropriate shell commands into the `assemble` script:

```terminal title=".s2i/bin/assemble File"
#!/bin/sh
APP_VERSION=1.0
wget http://repository.example.com/app/app-$APP_VERSION.jar -O app.jar
```

```terminal title=".s2i/bin/run File"
#!/bin/sh
exec java -jar app.jar
```

{% if not openshift_online %}
For a Docker build strategy, you must modify the Dockerfile and invoke
shell commands with the [`RUN` instruction](https://docs.docker.com/engine/reference/builder/#run):

```terminal title="Excerpt of Dockerfile"
FROM jboss/base-jdk:8

ENV APP_VERSION 1.0
RUN wget http://repository.example.com/app/app-$APP_VERSION.jar -O app.jar

EXPOSE 8080
CMD [ "java", "-jar", "app.jar" ]
```
{% endif %}

In practice, you may want to use an environment variable for the file location so that the specific file to be downloaded can be customized using an environment variable defined on the `BuildConfig`, rather than updating the
{%- if not openshift_online %}
Dockerfile or
{%- endif %}
`assemble` script.

You can choose between different methods of defining environment variables:

*   Using the `.s2i/environment` file (only for a `Source` build strategy)
*   Setting the variables in the `BuildConfig` object
*   Providing the variables explicitly using the `oc start-build --env` command (only for builds that are triggered manually)