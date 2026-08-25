{% if context == "installing-restricted-networks-aws" %}
{%- set restricted = true -%}
{% endif %}
{% if openshift_origin %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Completing an {{ aws_first }} installation on user-provisioned infrastructure {id="installation-aws-user-infra-installation_{{ context }}"}

To finish installing {{ product_title }} on user-provisioned {{ aws_short }} infrastructure, monitor the deployment until it completes successfully. {._abstract}

**Prerequisites**

*   You removed the bootstrap node for an {{ product_title }} cluster on user-provisioned {{ aws_short }} infrastructure.
*   You installed the `oc` CLI.

**Procedure**

{% if restricted %}
1.  From the directory that has the installation program, complete
{% endif %}
{% if not restricted %}
* From the directory that has the installation program, complete
{%- endif %}
the cluster installation:

```terminal
$ ./openshift-install --dir <installation_directory> wait-for install-complete
```

For `<installation_directory>`, specify the path to the directory that you stored the installation files in.

.Example output
```terminal
INFO Waiting up to 40m0s for the cluster at https://api.mycluster.example.com:6443 to initialize...
INFO Waiting up to 10m0s for the openshift-console route to be created...
INFO Install complete!
INFO To access the cluster as the system:admin user when using 'oc', run 'export KUBECONFIG=/home/myuser/install_dir/auth/kubeconfig'
INFO Access the OpenShift web-console here: https://console-openshift-console.apps.mycluster.example.com
INFO Login to the console with user: "kubeadmin", and password: "password"
INFO Time elapsed: 1s
```


:::important

*   The Ignition config files that the installation program generates contain certificates that expire after 24 hours, which are then renewed at that time. If you shut down the cluster before renewing the certificates and later restart it after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. See the documentation for _Recovering from expired control plane certificates_ for more information.
*   Use Ignition config files within 12 hours after the installation program generates them because the 24-hour certificate rotates from 16 to 22 hours after you install the cluster. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.

:::


{% if restricted %}
1.  Register your cluster on the [Cluster registration](https://console.redhat.com/openshift/register) page.
{% endif %}

{% if context == "installing-restricted-networks-aws" %}
{%- set restricted = "" -%}
{% endif %}
{% if openshift_origin %}
{%- set restricted = "" -%}
{% endif %}