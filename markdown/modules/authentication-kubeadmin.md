{%- set _mod_docs_content_type = "CONCEPT" %}
# The kubeadmin user {id="understanding-kubeadmin_{{ context }}"}

{{ product_title }} creates a cluster administrator, `kubeadmin`, after the
installation process completes. This user has the `cluster-admin` role automatically applied and is treated as the root user for the cluster. {._abstract}

The password is dynamically generated and unique to your {{ product_title }} environment. After the installation completes, the password is provided in the installation program’s output.
For example:

```terminal
INFO Install complete!
INFO Run 'export KUBECONFIG=<your working directory>/auth/kubeconfig' to manage the cluster with 'oc', the OpenShift CLI.
INFO The cluster is ready when 'oc login -u kubeadmin -p <provided>' succeeds (wait a few minutes).
INFO Access the OpenShift web-console here: https://console-openshift-console.apps.demo1.openshift4-beta-abcorp.com
INFO Login to the console with user: kubeadmin, password: <provided>
```