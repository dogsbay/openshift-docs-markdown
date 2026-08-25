{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an application from a template {id="applications-create-using-cli-template_{{ context }}"}

You can create an application from a previously stored template or from a
template file, by specifying the name of the template as an argument. For
example, you can store a sample application template and use it to create an
application.

Upload an application template to your current project’s template library. The following example uploads an application template from a file called `examples/sample-app/application-template-stibuild.json`:

```terminal
$ oc create -f examples/sample-app/application-template-stibuild.json
```

Then create a new application by referencing the application template. In this example, the template name is `ruby-helloworld-sample`:

```terminal
$ oc new-app ruby-helloworld-sample
```

To create a new application by referencing a template file in your local file system, without first storing it in {{ product_title }}, use the `-f|--file` argument. For example:

```terminal
$ oc new-app -f examples/sample-app/application-template-stibuild.json
```

## Template parameters {id="_template_parameters"}

When creating an application based on a template, use the `-p|--param` argument to set parameter values that are defined by the template:

```terminal
$ oc new-app ruby-helloworld-sample \
    -p ADMIN_USERNAME=admin -p ADMIN_PASSWORD=mypassword
```

You can store your parameters in a file, then use that file with `--param-file` when instantiating a template. If you want to read the parameters from standard input, use `--param-file=-`. The following is an example file called `helloworld.params`:

```terminal
ADMIN_USERNAME=admin
ADMIN_PASSWORD=mypassword
```

Reference the parameters in the file when instantiating a template:

```terminal
$ oc new-app ruby-helloworld-sample --param-file=helloworld.params
```