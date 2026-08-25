{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring post commit build hooks {id="builds-configuring-post-commit-build-hooks_{{ context }}"}

There are different ways to configure the post-build hook. All forms in the following examples are equivalent and run `bundle exec rake test --verbose`.

**Procedure**

*   Use one of the following options to configure post-build hooks:
<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Shell script</td>
  <td><pre>postCommit:&#10;  script: "bundle exec rake test --verbose"</pre><br><br>The <code>script</code> value is a shell script to be run with <code>/bin/sh -ic</code>. Use this option when a shell script is appropriate to execute the build hook. For example, for running unit tests as above. To control the image entry point or if the image does not have <code>/bin/sh</code>, use <code>command</code>, or <code>args</code>, or both.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>The additional <code>-i</code> flag was introduced to improve the experience working with CentOS and RHEL images, and may be removed in a future release.</dd></dl></td>
</tr>
<tr>
  <td>Command as the image entry point</td>
  <td><pre>postCommit:&#10;  command: ["/bin/bash", "-c", "bundle exec rake test --verbose"]</pre><br><br>In this form, <code>command</code> is the command to run, which overrides the image entry point in the exec form, as documented in the <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">Dockerfile reference</a>. This is needed if the image does not have <code>/bin/sh</code>, or if you do not want to use a shell. In all other cases, using <code>script</code> might be more convenient.</td>
</tr>
<tr>
  <td>Command with arguments</td>
  <td><pre>postCommit:&#10;  command: ["bundle", "exec", "rake", "test"]&#10;  args: ["--verbose"]</pre><br><br>This form is equivalent to appending the arguments to <code>command</code>.</td>
</tr>
</tbody>
</table>


    :::note

    Providing both `script` and `command` simultaneously creates an invalid build hook.
    
    :::