{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install and enable the cert-manager Operator using RPM {id="microshift-install-cert-manager_{{ context }}"}

The microshift-cert-manager RPM is an optional component that can be installed at any time. Follow these steps to install and verify the certificate manager: {._abstract}

**Procedure**

1.  Install the `cert-manager-operator` using the `microshift-cert-manager` RPM by running the following command:
    ```terminal
    $ sudo dnf install microshift-cert-manager
    ```
1.  Verify the certificate manager versions that are used by running the following command:
    ```terminal
    $ rpm -qi microshift-cert-manager
    ```
1.  Restart {{ microshift_short }} by running the following command:
    ```terminal
    $ systemctl microshift restart
    ```
1.  Verify that the `microshift-cert-manager` RPM is installed by running the following command:
    ```terminal
    $ oc get deployment -n  cert-manager-operator
    ```
    ```terminal title="Example output "
    NAME                                       READY   UP-TO-DATE   AVAILABLE   AGE
    cert-manager-operator-controller-manager   1/1     1            1           2d22h
    ```
1.  Verify that the`cert-manager` deployments are in a ready state and are up-to-date in the cert-manager namespace by running the following command:
    ```terminal
    $ oc get deployment -n cert-manager
    ```
    ```terminal title="Example output "
    NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
    cert-manager              1/1     1            1           2d22h
    cert-manager-cainjector   1/1     1            1           2d22h
    cert-manager-webhook      1/1     1            1           2d22h
    ```
1.  Verify that the pods are running in the `cert-manager` namespace by running the following command:
    ```terminal
    $ oc get pods -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                                       READY   STATUS    RESTARTS   AGE
    cert-manager-7cfb4fbb84-qdmk8              1/1     Running   2          2d22h
    cert-manager-cainjector-854f669657-xzs8b   1/1     Running   2          2d22h
    cert-manager-webhook-68fd6d5f5c-j942h      1/1     Running   2          2d22h
    ```