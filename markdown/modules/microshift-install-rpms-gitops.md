{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the {{ gitops }} Argo CD manifests from an RPM package {id="microshift-installing-rpms-for-gitops_{{ context }}"}

You can use a lightweight version of {{ gitops_title }} with {{ microshift_short }} to help manage your applications by installing the `microshift-gitops` RPM package. {._abstract}

The `microshift-gitops` RPM package includes the necessary manifests to run core Argo CD.


:::important

The Argo CD web console is not available on {{ microshift_short }}. This process installs basic {{ gitops }} functions.

:::


**Prerequisites**

*   You installed {{ microshift_short }} version 4.16 or later.
*   You configured 250MB RAM of additional storage.

**Procedure**

1.  Enable the {{ gitops }} repository with the subscription manager by running the following command:
    ```terminal {minja}
    $ sudo subscription-manager repos --enable=gitops-{{ gitops_ver }}-for-{{ rhel_major }}-$(uname -m)-rpms
    ```
1.  Install the {{ microshift_short }} {{ gitops }} package by running the following command:
    ```terminal
    $ sudo dnf install -y microshift-gitops
    ```
1.  To deploy Argo CD pods, restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```

**Verification**

*   You can verify that your pods are running properly by entering the following command:
    ```terminal
    $ oc get pods -n openshift-gitops
    ```
    ```terminal title="Example output"
    NAME                                  READY   STATUS    RESTARTS   AGE
    argocd-application-controller-0       1/1     Running   0          4m11s
    argocd-redis-56844446bc-dzmhf         1/1     Running   0          4m12s
    argocd-repo-server-57b4f896cf-7qk8l   1/1     Running   0          4m12s
    ```