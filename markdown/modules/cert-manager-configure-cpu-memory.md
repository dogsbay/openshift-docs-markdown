{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding CPU and memory limits for the cert-manager components {id="cert-manager-configure-cpu-memory_{{ context }}"}

To ensure stable resource allocation and operation, configure CPU and memory limits for {{ cert_manager_operator }} components. You can set specific constraints for the cert-manager controller, CA injector, and Webhook to align with your specific cluster requirements. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster as a user with the `cluster-admin` role.
*   You have installed version 1.12.0 or later of the {{ cert_manager_operator }}.

**Procedure**

1.  Check that the deployments of the cert-manager controller, CA injector, and Webhook are available by entering the following command:
    ```terminal
    $ oc get deployment -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
    cert-manager              1/1     1            1           53m
    cert-manager-cainjector   1/1     1            1           53m
    cert-manager-webhook      1/1     1            1           53m
    ```
1.  Before setting the CPU and memory limit, check the existing configuration for the cert-manager controller, CA injector, and Webhook by entering the following command:
    ```terminal
    $ oc get deployment -n cert-manager -o yaml
    ```
    ```yaml title="Example output"
    # ...
      metadata:
        name: cert-manager
        namespace: cert-manager
    # ...
      spec:
        template:
          spec:
            containers:
            - name: cert-manager-controller
              resources: {}
    # ...
      metadata:
        name: cert-manager-cainjector
        namespace: cert-manager
    # ...
      spec:
        template:
          spec:
            containers:
            - name: cert-manager-cainjector
              resources: {}
    # ...
      metadata:
        name: cert-manager-webhook
        namespace: cert-manager
    # ...
      spec:
        template:
          spec:
            containers:
            - name: cert-manager-webhook
              resources: {}
    # ...
    ```

    The `spec.resources` field is empty by default. The cert-manager components do not have CPU and memory limits.
1.  To configure the CPU and memory limits for the cert-manager controller, CA injector, and Webhook, enter the following command:
    ```terminal
    $ oc patch certmanager.operator cluster --type=merge -p="
    spec:
      controllerConfig:
        overrideResources:
          limits:
            cpu: 200m
            memory: 64Mi
          requests:
            cpu: 10m
            memory: 16Mi
      webhookConfig:
        overrideResources:
          limits:
            cpu: 200m
            memory: 64Mi
          requests:
            cpu: 10m
            memory: 16Mi
      cainjectorConfig:
        overrideResources:
          limits:
            cpu: 200m
            memory: 64Mi
          requests:
            cpu: 10m
            memory: 16Mi
    "
    ```

    For information about the overridable resource parameters, see "Overridable resource parameters for the cert-manager components" in "Explanation of fields in the CertManager custom resource".
    ```terminal title="Example output"
    certmanager.operator.openshift.io/cluster patched
    ```

**Verification**

1.  Verify that the CPU and memory limits are updated for the cert-manager components:
    ```terminal
    $ oc get deployment -n cert-manager -o yaml
    ```
    ```yaml title="Example output"
    # ...
      metadata:
        name: cert-manager
        namespace: cert-manager
    # ...
      spec:
        template:
          spec:
            containers:
            - name: cert-manager-controller
              resources:
                limits:
                  cpu: 200m
                  memory: 64Mi
                requests:
                  cpu: 10m
                  memory: 16Mi
    # ...
      metadata:
        name: cert-manager-cainjector
        namespace: cert-manager
    # ...
      spec:
        template:
          spec:
            containers:
            - name: cert-manager-cainjector
              resources:
                limits:
                  cpu: 200m
                  memory: 64Mi
                requests:
                  cpu: 10m
                  memory: 16Mi
    # ...
      metadata:
        name: cert-manager-webhook
        namespace: cert-manager
    # ...
      spec:
        template:
          spec:
            containers:
            - name: cert-manager-webhook
              resources:
                limits:
                  cpu: 200m
                  memory: 64Mi
                requests:
                  cpu: 10m
                  memory: 16Mi
    # ...
    ```