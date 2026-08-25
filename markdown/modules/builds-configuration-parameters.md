{%- set _mod_docs_content_type = "REFERENCE" %}
# Build controller configuration parameters {id="builds-configuration-parameters_{{ context }}"}

The `build.config.openshift.io/cluster` resource offers the following configuration parameters.

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Build</code></td>
  <td>Holds cluster-wide information on how to handle builds. The canonical, and only valid name is <code>cluster</code>.<br><br><code>spec</code>: Holds user-settable values for the build controller configuration.</td>
</tr>
<tr>
  <td><code>buildDefaults</code></td>
  <td>Controls the default information for builds.<br><br><code>defaultProxy</code>: Contains the default proxy settings for all build operations, including image pull or push and source download.<br><br>You can override values by setting the <code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code>, and <code>NO_PROXY</code> environment variables in the <code>BuildConfig</code> strategy.<br><br><code>gitProxy</code>: Contains the proxy settings for Git operations only. If set, this overrides any proxy settings for all Git commands, such as <code>git clone</code>.<br><br>Values that are not set here are inherited from DefaultProxy.<br><br><code>env</code>: A set of default environment variables that are applied to the build if the specified variables do not exist on the build.<br><br><code>imageLabels</code>: A list of labels that are applied to the resulting image. You can override a default label by providing a label with the same name in the <code>BuildConfig</code>.<br><br><code>resources</code>: Defines resource requirements to execute the build.</td>
</tr>
<tr>
  <td><code>ImageLabel</code></td>
  <td><code>name</code>: Defines the name of the label. It must have non-zero length.</td>
</tr>
<tr>
  <td><code>buildOverrides</code></td>
  <td>Controls override settings for builds.<br><br><code>imageLabels</code>: A list of labels that are applied to the resulting image. If you provided a label in the <code>BuildConfig</code> with the same name as one in this table, your label will be overwritten.<br><br><code>nodeSelector</code>: A selector which must be true for the build pod to fit on a node.<br><br><code>tolerations</code>: A list of tolerations that overrides any existing tolerations set on a build pod.</td>
</tr>
<tr>
  <td><code>BuildList</code></td>
  <td><code>items</code>: Standard object's metadata.</td>
</tr>
</tbody>
</table>