{%- set _mod_docs_content_type = "REFERENCE" %}
# About listing volumes and volume mounts in a pod {id="nodes-containers-volumes-listing_{{ context }}"}

You can list volumes and volume mounts in pods or pod templates. {._abstract}

You can list volumes by running the following command:

```terminal
$ oc set volume <object_type>/<name> [options]
```

List volume supported options:
<table>
<thead>
<tr>
  <th>Option</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Description</td>
</tr>
<tr>
  <td>Default</td>
</tr>
<tr>
  <td><code>--name</code></td>
</tr>
<tr>
  <td>Name of the volume.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>-c, --containers</code></td>
</tr>
<tr>
  <td>Select containers by name. It can also take wildcard <code>'*'</code> that matches anycharacter.</td>
</tr>
<tr>
  <td><code>'*'</code></td>
</tr>
</tbody>
</table>

For example:

*   To list all volumes for pod **p1**:
    ```terminal
    $ oc set volume pod/p1
    ```
*   To list volume **v1** defined on all deployment configs:
    ```terminal
    $ oc set volume dc --all --name=v1
    ```