{%- set _mod_docs_content_type = "REFERENCE" %}

# Reference cluster-compare plugin options {id="cluster-compare-reference-args_{{ context }}"}

The following content describes the options for the `cluster-compare` plugin.  {._abstract}

**Cluster-compare plugin options**

<table>
<tbody>
<tr>
  <td>Option</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>-A</code>, <code>--all-resources</code></td>
  <td>When used with a live cluster, attempts to match all resources in the cluster that match a type in the reference configuration. When used with local files, attempts to match all resources in the local files that match a type in the reference configuration.</td>
</tr>
<tr>
  <td><code>--concurrency</code></td>
  <td>Specify an integer value for the number of templates to process in parallel when comparing with resources from the live version. A larger number increases speed but also memory, I/O, and CPU usage during that period. The default value is <code>4</code>.</td>
</tr>
<tr>
  <td><code>-c</code>, <code>--diff-config</code></td>
  <td>Specify the path to the user configuration file.</td>
</tr>
<tr>
  <td><code>-f</code>, <code>--filename</code></td>
  <td>Specify a filename, directory, or URL for the configuration custom resources that you want to use for a comparison with a reference configuration.</td>
</tr>
<tr>
  <td><code>--generate-override-for</code></td>
  <td>Specify the path for templates that requires a patch.</td>
</tr>
<tr>
  <td><code>--show-template-functions</code></td>
  <td>Displays the available template functions.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>You must use a file path for the target template that is relative to the <code>metadata.yaml</code> file. For example, if the file path for the <code>metadata.yaml</code> file is <code>./compare/metadata.yaml</code>, a relative file path for the template might be <code>optional/my-template.yaml</code>.</dd></dl></td>
</tr>
<tr>
  <td><code>-h</code>, <code>--help</code></td>
  <td>Display help information.</td>
</tr>
<tr>
  <td><code>-k</code>, <code>--kustomize</code></td>
  <td>Specify a path to process the <code>kustomization</code> directory. This flag cannot be used together with <code>-f</code> or <code>-R</code>.</td>
</tr>
<tr>
  <td><code>-o</code>, <code>--output</code></td>
  <td>Specify the output format. Options include <code>json</code>, <code>yaml</code>, <code>junit</code>, or <code>generate-patches</code>.</td>
</tr>
<tr>
  <td><code>--override-reason</code></td>
  <td>Specify a reason for generating the override.</td>
</tr>
<tr>
  <td><code>-p</code>, <code>--overrides</code></td>
  <td>Specify a path to a patch override file for the reference configuration.</td>
</tr>
<tr>
  <td><code>-R</code>, <code>--recursive</code></td>
  <td>Processes the directory specified in <code>-f</code>, <code>--filename</code> recursively.</td>
</tr>
<tr>
  <td><code>-r</code>, <code>--reference</code></td>
  <td>Specify the path to the reference configuration <code>metadata.yaml</code> file.</td>
</tr>
<tr>
  <td><code>--show-managed-fields</code></td>
  <td>Specify <code>true</code> to include managed fields in the comparison.</td>
</tr>
<tr>
  <td><code>-v</code>, <code>--verbose</code></td>
  <td>Increases the verbosity of the plugin output.</td>
</tr>
</tbody>
</table>