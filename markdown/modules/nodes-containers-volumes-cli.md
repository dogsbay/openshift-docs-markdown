{%- set _mod_docs_content_type = "REFERENCE" %}
# Working with volumes using the {{ product_title }} CLI {id="nodes-containers-volumes-cli_{{ context }}"}

You can use the CLI command `oc set volume` to add and remove volumes and
volume mounts for any object that has a pod template like replication controllers or
deployment configs. You can also list volumes in pods or any
object that has a pod template. {._abstract}

The `oc set volume` command uses the following general syntax:

```terminal
$ oc set volume <object_selection> <operation> <mandatory_parameters> <options>
```


Object selection
:   Specify one of the following for the `object_selection` parameter in the `oc set volume` command:

    <a name="vol-object-selection_{{ context }}"></a>

    **Object Selection**

<table>
<thead>
<tr>
  <th>Syntax</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Description</td>
</tr>
<tr>
  <td>Example</td>
</tr>
<tr>
  <td><code>_&lt;object_type&gt;<em> </em>&lt;name&gt;_</code></td>
</tr>
<tr>
  <td>Selects <code><em>&lt;name&gt;</em></code> of type <code>_&lt;object_type&gt;_</code>.</td>
</tr>
<tr>
  <td><code>deploymentConfig registry</code></td>
</tr>
<tr>
  <td><code>_&lt;object_type&gt;<em>/</em>&lt;name&gt;_</code></td>
</tr>
<tr>
  <td>Selects <code><em>&lt;name&gt;</em></code> of type <code>_&lt;object_type&gt;_</code>.</td>
</tr>
<tr>
  <td><code>deploymentConfig/registry</code></td>
</tr>
<tr>
  <td><code>_&lt;object_type&gt;_</code> <code>--selector=_&lt;object_label_selector&gt;_</code></td>
</tr>
<tr>
  <td>Selects resources of type <code>_&lt;object_type&gt;_</code> that matched the given label selector.</td>
</tr>
<tr>
  <td><code>deploymentConfig</code> <code>--selector="name=registry"</code></td>
</tr>
<tr>
  <td><code>_&lt;object_type&gt;_ --all</code></td>
</tr>
<tr>
  <td>Selects all resources of type <code>_&lt;object_type&gt;_</code>.</td>
</tr>
<tr>
  <td><code>deploymentConfig --all</code></td>
</tr>
<tr>
  <td><code>-f</code> or <code>--filename=_&lt;file_name&gt;_</code></td>
</tr>
<tr>
  <td>File name, directory, or URL to file to use to edit the resource.</td>
</tr>
<tr>
  <td><code>-f registry-deployment-config.json</code></td>
</tr>
</tbody>
</table>


Operation
:   Specify `--add` or `--remove` for the `operation` parameter in the `oc set volume` command.


Mandatory parameters
:   Any mandatory parameters are specific to the
    selected operation and are discussed in later sections.


Options
:   Any options are specific to the
    selected operation and are discussed in later sections.