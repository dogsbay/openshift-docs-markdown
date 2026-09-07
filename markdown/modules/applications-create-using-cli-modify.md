{%- set _mod_docs_content_type = "REFERENCE" %}
# Customization options for application creation {id="applications-create-using-cli-modify_{{ context }}"}

You can customize how the `oc new-app` command creates applications by setting names, labels, environment variables, target projects, and other options. Use these flags to control the objects the command generates before you deploy. {._abstract}

**`new-app` output objects**

<table>
<thead>
<tr>
  <th>Object</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>BuildConfig</code></td>
  <td>A <code>BuildConfig</code> object is created for each source repository that is specified in the command line. The <code>BuildConfig</code> object specifies the strategy to use, the source location, and the build output location.</td>
</tr>
<tr>
  <td><code>ImageStreams</code></td>
  <td>For the <code>BuildConfig</code> object, two image streams are usually created. One represents the input image. With source builds, this is the builder image. {% if not openshift_online %}With <code>Docker</code> builds, this is the <strong>FROM</strong> image.{% endif %} The second one represents the output image. If a container image was specified as input to <code>new-app</code>, then an image stream is created for that image as well.</td>
</tr>
<tr>
  <td><code>DeploymentConfig</code></td>
  <td>A <code>DeploymentConfig</code> object is created either to deploy the output of a build, or a specified image. The <code>new-app</code> command creates <code>emptyDir</code> volumes for all Docker volumes that are specified in containers included in the resulting <code>DeploymentConfig</code> object.</td>
</tr>
<tr>
  <td><code>Service</code></td>
  <td>The <code>new-app</code> command attempts to detect exposed ports in input images. It uses the lowest numeric exposed port to generate a service that exposes that port. To expose a different port, after <code>new-app</code> has completed, use the <code>oc expose</code> command to generate additional services.</td>
</tr>
<tr>
  <td>Other</td>
  <td>Other objects can be generated when creating applications from templates, according to the template.</td>
</tr>
</tbody>
</table>

## Specifying environment variables {id="specifying-environment-variables_{{ context }}"}

When generating applications from a template, source, or an image, you can use the `-e|--env` argument to pass environment variables to the application container at run time.

```terminal
$ oc new-app openshift/postgresql-92-centos7 \
    -e POSTGRESQL_USER=user \
    -e POSTGRESQL_DATABASE=db \
    -e POSTGRESQL_PASSWORD=password
```

The variables can also be read from file using the `--env-file` argument. The following is an example file called `postgresql.env`:

```terminal
POSTGRESQL_USER=user
POSTGRESQL_DATABASE=db
POSTGRESQL_PASSWORD=password
```

Read the variables from the file:

```terminal
$ oc new-app openshift/postgresql-92-centos7 --env-file=postgresql.env
```

Additionally, environment variables can be given on standard input by using the `--env-file=-` argument:

```terminal
$ cat postgresql.env | oc new-app openshift/postgresql-92-centos7 --env-file=-
```


:::note

Any `BuildConfig` objects created as part of `new-app` processing are not updated with environment variables passed with the `-e|--env` or `--env-file` argument.

:::


## Specifying build environment variables {id="specifying-build-environment-variables_{{ context }}"}

When generating applications from a template, source, or an image, you can use the `--build-env` argument to pass environment variables to the build container at run time:

```terminal
$ oc new-app openshift/ruby-23-centos7 \
    --build-env HTTP_PROXY=http://myproxy.net:1337/ \
    --build-env GEM_HOME=~/.gem
```

The variables can also be read from a file using the `--build-env-file` argument. The following is an example file called `ruby.env`:

```terminal
HTTP_PROXY=http://myproxy.net:1337/
GEM_HOME=~/.gem
```

Read the variables from the file:

```terminal
$ oc new-app openshift/ruby-23-centos7 --build-env-file=ruby.env
```

Additionally, environment variables can be given on standard input by using `--build-env-file=-`:

```terminal
$ cat ruby.env | oc new-app openshift/ruby-23-centos7 --build-env-file=-
```

## Specifying labels {id="specifying-labels_{{ context }}"}

When generating applications from source, images, or templates, you can use the `-l|--label` argument to add labels to the created objects. Labels make it easy to collectively select, configure, and delete objects associated with the application.

```terminal
$ oc new-app https://github.com/openshift/ruby-hello-world -l name=hello-world
```

## Viewing the output without creation {id="viewing-output-without-creation_{{ context }}"}

You can preview objects without creating them by using `-o` or `--output` with a `yaml` or `json` value. Redirect the output to a file, edit the file, then create the objects with `oc create`.

```terminal title="Writing new-app output to a file"
$ oc new-app https://github.com/openshift/ruby-hello-world \
    -o yaml > myapp.yaml
```

```terminal title="Creating objects from an edited file"
$ oc create -f myapp.yaml
```

## Creating objects with different names {id="creating-objects-different-names_{{ context }}"}

Objects created by `new-app` are normally named after the source repository, or the image used to generate them. You can set the name of the objects produced by adding a `--name` flag to the command:

```terminal
$ oc new-app https://github.com/openshift/ruby-hello-world --name=myapp
```

## Creating objects in a different project {id="creating-objects-different-project_{{ context }}"}

Normally, `new-app` creates objects in the current project. However, you can create objects in a different project by using the `-n|--namespace` argument:

```terminal
$ oc new-app https://github.com/openshift/ruby-hello-world -n myproject
```

## Creating multiple objects {id="creating-multiple-objects_{{ context }}"}

You can create multiple applications by specifying multiple parameters to `new-app`. Labels specified in the command line apply to all objects created by the single command. Environment variables apply to all components created from source or images.

To create an application from a source repository and a Docker Hub image:

```terminal
$ oc new-app https://github.com/openshift/ruby-hello-world mysql
```


:::note

If a source code repository and a builder image are specified as separate arguments, `new-app` uses the builder image as the builder for the source code repository. If this is not the intent, specify the required builder image for the source using the `~` separator.

:::


## Grouping images and source in a single pod {id="grouping-images-source-single-pod_{{ context }}"}

You can deploy multiple images together in a single pod. To specify which images to group together, use the `+` separator. The `--group` command-line argument can also be used to specify the images that should be grouped together. To group the image built from a source repository with other images, specify the builder image for the source in the group:

```terminal
$ oc new-app ruby+mysql
```

To deploy an image built from source and an external image together:

```terminal
$ oc new-app \
    ruby~https://github.com/openshift/ruby-hello-world \
    mysql \
    --group=ruby+mysql
```

## Searching for images, templates, and other inputs {id="searching-for-images-templates-other-inputs_{{ context }}"}

To search for images, templates, and other inputs for the `oc new-app` command, add the `--search` and `--list` flags. For example, to find all of the images or templates that include PHP:

```terminal
$ oc new-app --search php
```

## Setting the import mode {id="setting-the-import-mode_{{ context }}"}

To set the import mode when using `oc new-app`, add the `--import-mode` flag. This flag can be appended with `Legacy` or `PreserveOriginal`, which provides users the option to create image streams using a single sub-manifest, or all manifests, respectively.

```terminal
$ oc new-app --image=registry.redhat.io/ubi8/httpd-24:latest --import-mode=Legacy --name=test
```

```terminal
$ oc new-app --image=registry.redhat.io/ubi8/httpd-24:latest --import-mode=PreserveOriginal --name=test
```