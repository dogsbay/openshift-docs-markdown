{%- set _mod_docs_content_type = "REFERENCE" %}
# Jenkins environment variables {id="images-other-jenkins-env-var_{{ context }}"}

The Jenkins server can be configured with the following environment variables:

<table>
<thead>
<tr>
  <th>Variable</th>
  <th>Definition</th>
  <th>Example values and settings</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>OPENSHIFT_ENABLE_OAUTH</code></td>
  <td>Determines whether the {{ product_title }} Login plugin manages authentication when logging in to Jenkins. To enable, set to <code>true</code>.</td>
  <td>Default: <code>false</code></td>
</tr>
<tr>
  <td><code>JENKINS_PASSWORD</code></td>
  <td>The password for the <code>admin</code> user when using standard Jenkins authentication. Not applicable when <code>OPENSHIFT_ENABLE_OAUTH</code> is set to <code>true</code>.</td>
  <td>Default: <code>password</code></td>
</tr>
<tr>
  <td><code>JAVA_MAX_HEAP_PARAM</code>, <code>CONTAINER_HEAP_PERCENT</code>, <code>JENKINS_MAX_HEAP_UPPER_BOUND_MB</code></td>
  <td>These values control the maximum heap size of the Jenkins JVM. If <code>JAVA_MAX_HEAP_PARAM</code> is set, its value takes precedence. Otherwise, the maximum heap size is dynamically calculated as <code>CONTAINER_HEAP_PERCENT</code> of the container memory limit, optionally capped at <code>JENKINS_MAX_HEAP_UPPER_BOUND_MB</code> MiB. By default, the maximum heap size of the Jenkins JVM is set to 50% of the container memory limit with no cap.</td>
  <td><code>JAVA_MAX_HEAP_PARAM</code> example setting: <code>-Xmx512m</code><br><br><code>CONTAINER_HEAP_PERCENT</code> default: <code>0.5</code>, or 50%<br><br><code>JENKINS_MAX_HEAP_UPPER_BOUND_MB</code> example setting: <code>512 MiB</code></td>
</tr>
<tr>
  <td><code>JAVA_INITIAL_HEAP_PARAM</code>, <code>CONTAINER_INITIAL_PERCENT</code></td>
  <td>These values control the initial heap size of the Jenkins JVM. If <code>JAVA_INITIAL_HEAP_PARAM</code> is set, its value takes precedence. Otherwise, the initial heap size is dynamically calculated as <code>CONTAINER_INITIAL_PERCENT</code> of the dynamically calculated maximum heap size. By default, the JVM sets the initial heap size.</td>
  <td><code>JAVA_INITIAL_HEAP_PARAM</code> example setting: <code>-Xms32m</code><br><br><code>CONTAINER_INITIAL_PERCENT</code> example setting: <code>0.1</code>, or 10%</td>
</tr>
<tr>
  <td><code>CONTAINER_CORE_LIMIT</code></td>
  <td>If set, specifies an integer number of cores used for sizing numbers of internal JVM threads.</td>
  <td>Example setting: <code>2</code></td>
</tr>
<tr>
  <td><code>JAVA_TOOL_OPTIONS</code></td>
  <td>Specifies options to apply to all JVMs running in this container. It is not recommended to override this value.</td>
  <td>Default: <code>-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -Dsun.zip.disableMemoryMapping=true</code></td>
</tr>
<tr>
  <td><code>JAVA_GC_OPTS</code></td>
  <td>Specifies Jenkins JVM garbage collection parameters. It is not recommended to override this value.</td>
  <td>Default: <code>-XX:+UseParallelGC -XX:MinHeapFreeRatio=5 -XX:MaxHeapFreeRatio=10 -XX:GCTimeRatio=4 -XX:AdaptiveSizePolicyWeight=90</code></td>
</tr>
<tr>
  <td><code>JENKINS_JAVA_OVERRIDES</code></td>
  <td>Specifies additional options for the Jenkins JVM. These options are appended to all other options, including the Java options above, and may be used to override any of them if necessary. Separate each additional option with a space; if any option contains space characters, escape them with a backslash.</td>
  <td>Example settings: <code>-Dfoo -Dbar</code>; <code>-Dfoo=first\ value -Dbar=second\ value</code>.</td>
</tr>
<tr>
  <td><code>JENKINS_OPTS</code></td>
  <td>Specifies arguments to Jenkins.</td>
  <td></td>
</tr>
<tr>
  <td><code>INSTALL_PLUGINS</code></td>
  <td>Specifies additional Jenkins plugins to install when the container is first run or when <code>OVERRIDE_PV_PLUGINS_WITH_IMAGE_PLUGINS</code> is set to <code>true</code>. Plugins are specified as a comma-delimited list of name:version pairs.</td>
  <td>Example setting: <code>git:3.7.0,subversion:2.10.2</code>.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_PERMISSIONS_POLL_INTERVAL</code></td>
  <td>Specifies the interval in milliseconds that the {{ product_title }} Login plugin polls {{ product_title }} for the permissions that are associated with each user that is defined in Jenkins.</td>
  <td>Default: <code>300000</code> - 5 minutes</td>
</tr>
<tr>
  <td><code>OVERRIDE_PV_CONFIG_WITH_IMAGE_CONFIG</code></td>
  <td>When running this image with an {{ product_title }} an {{ product_title }} persistent volume (PV) for the Jenkins configuration directory, the transfer of configuration from the image to the PV is performed only the first time the image starts because the PV is assigned when the persistent volume claim (PVC) is created. If you create a custom image that extends this image and updates the configuration in the custom image after the initial startup, the configuration is not copied over unless you set this environment variable to <code>true</code>.</td>
  <td>Default: <code>false</code></td>
</tr>
<tr>
  <td><code>OVERRIDE_PV_PLUGINS_WITH_IMAGE_PLUGINS</code></td>
  <td>When running this image with an {{ product_title }} an {{ product_title }} PV for the Jenkins configuration directory, the transfer of plugins from the image to the PV is performed only the first time the image starts because the PV is assigned when the PVC is created. If you create a custom image that extends this image and updates plugins in the custom image after the initial startup, the plugins are not copied over unless you set this environment variable to <code>true</code>.</td>
  <td>Default: <code>false</code></td>
</tr>
<tr>
  <td><code>ENABLE_FATAL_ERROR_LOG_FILE</code></td>
  <td>When running this image with an {{ product_title }} an {{ product_title }} PVC for the Jenkins configuration directory, this environment variable allows the fatal error log file to persist when a fatal error occurs. The fatal error file is saved at <code>/var/lib/jenkins/logs</code>.</td>
  <td>Default: <code>false</code></td>
</tr>
<tr>
  <td><code>AGENT_BASE_IMAGE</code></td>
  <td>Setting this value overrides the image used for the <code>jnlp</code> container in the sample Kubernetes plugin pod templates provided with this image. Otherwise, the image from the <code>jenkins-agent-base-rhel8:latest</code> image stream tag in the <code>openshift</code> namespace is used.</td>
  <td>Default: <code>image-registry.openshift-image-registry.svc:5000/openshift/jenkins-agent-base-rhel8:latest</code></td>
</tr>
<tr>
  <td><code>JAVA_BUILDER_IMAGE</code></td>
  <td>Setting this value overrides the image used for the <code>java-builder</code> container in the <code>java-builder</code> sample Kubernetes plugin pod templates provided with this image. Otherwise, the image from the <code>java:latest</code> image stream tag in the <code>openshift</code> namespace is used.</td>
  <td>Default: <code>image-registry.openshift-image-registry.svc:5000/openshift/java:latest</code></td>
</tr>
<tr>
  <td><code>JAVA_FIPS_OPTIONS</code></td>
  <td>Setting this value controls how the JVM operates when running on a FIPS node. For more information, see <a href="https://access.redhat.com/documentation/en-us/red_hat_build_of_openjdk/11/html-single/configuring_red_hat_build_of_openjdk_11_on_rhel_with_fips/index#config-fips-in-openjdk">Configure Red Hat build of OpenJDK 11 in FIPS mode</a>.</td>
  <td>Default: <code>-Dcom.redhat.fips=false</code></td>
</tr>
</tbody>
</table>