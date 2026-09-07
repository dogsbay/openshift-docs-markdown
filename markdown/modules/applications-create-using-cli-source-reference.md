{%- set _mod_docs_content_type = "REFERENCE" %}
# Build strategy and language detection for source applications {id="applications-create-using-cli-source-reference_{{ context }}"}

You can determine which build strategy and language builder the `oc new-app` command selects by reviewing files in the root or context directory of your Git repository. Use these detection rules to override the build strategy or specify a builder image when automatic detection does not apply. {._abstract}

## Build strategy detection {id="build-strategy-detection_{{ context }}"}

{{ product_title }} automatically determines which build strategy to use by detecting certain files:

*   If a `Jenkinsfile` exists in the root or specified context directory of the source repository when creating a new application, {{ product_title }} generates a pipeline build strategy.

    :::note

    The `pipeline` build strategy is deprecated; consider using {{ pipelines_title }} instead.
    
    :::

*   If a `Dockerfile` exists in the root or specified context directory of the source repository when creating a new application, {{ product_title }} generates a docker build strategy.
*   If neither a `Jenkinsfile` nor a `Dockerfile` is detected, {{ product_title }} generates a source build strategy.

## Language detection {id="language-detection_{{ context }}"}

If you use the source build strategy, `new-app` detects the language builder from certain files in the root or context directory of the repository.

**Languages detected by `new-app`**

<table>
<thead>
<tr>
  <th>Language</th>
  <th>Files</th>
</tr>
</thead>
<tbody>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_aro or openshift_online %}<td><code>dotnet</code></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_aro or openshift_online %}<td><code>project.json</code>, <code>pass:[*.csproj]</code></td>{% endif %}
</tr>
<tr>
  <td><code>jee</code></td>
  <td><code>pom.xml</code></td>
</tr>
<tr>
  <td><code>nodejs</code></td>
  <td><code>app.json</code>, <code>package.json</code></td>
</tr>
<tr>
  <td><code>perl</code></td>
  <td><code>cpanfile</code>, <code>index.pl</code></td>
</tr>
<tr>
  <td><code>php</code></td>
  <td><code>composer.json</code>, <code>index.php</code></td>
</tr>
<tr>
  <td><code>python</code></td>
  <td><code>requirements.txt</code>, <code>setup.py</code></td>
</tr>
<tr>
  <td><code>ruby</code></td>
  <td><code>Gemfile</code>, <code>Rakefile</code>, <code>config.ru</code></td>
</tr>
<tr>
  <td><code>scala</code></td>
  <td><code>build.sbt</code></td>
</tr>
<tr>
  <td><code>golang</code></td>
  <td><code>Godeps</code>, <code>main.go</code></td>
</tr>
</tbody>
</table>

After a language is detected, the `new-app` command searches the {{ product_title }} server for image stream tags with a matching `supports` annotation or image streams that match the language name. If a match is not found, the `new-app` command searches the Docker Hub registry for an image that matches the detected language based on name.

When you specify an image and repository with the `~` separator, build strategy detection and language detection are not carried out.


:::note

Language detection requires the Git client to be locally installed so that your repository can be cloned and inspected. If Git is not available, you can avoid the language detection step by specifying the builder image to use with your repository with the `<image>~<repository>` syntax.

The `-i <image> <repository>` invocation requires that `new-app` attempt to clone `repository` to determine what type of artifact it is, so the command fails if Git is not available.

The `-i <image> --code <repository>` invocation requires that `new-app` clone `repository` to learn whether `image` is a builder for the source or a separate deployment, such as a database image.

:::