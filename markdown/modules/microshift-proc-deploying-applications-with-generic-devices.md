{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying applications that use generic devices {id="microshift-deploying-applications-with-generic-devices_{{ context }}"}

After the Generic Device Plugin (GDP) is configured and enabled in {{ microshift_short }}, you can deploy Kubernetes workloads, such as pods, deployments, or `StatefulSets`, that request access to the host devices that you have exposed. Devices are made available inside the container without requiring the pod to run with elevated privileges. {._abstract}

**Prerequisites**

*   You installed {{ microshift_short }}.
*   You enabled and configured GDP.
*   You installed {{ oc_first }}.

**Procedure**

1.  Define the device request in your `Pod` specification:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: device-app
    spec:
      containers:
      - name: container
        image: <your_application_image>
        command: ["/path/to/your/app"]
        args: ["--device_path=/dev/video0"]
        resources:
          limits:
            device.microshift.io/video: 1
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop: ["ALL"]
          runAsNonRoot: true
          seccompProfile:
            type: "RuntimeDefault"
    ```

    where:

    `spec.containers.image`
    :   Specifies the container image.

    `spec.containers.command`
    :   Specifies the command for your application.

    `spec.containers.args`
    :   Specifies the arguments for your application. For example, how your application might use the device.

    `spec.containers.resources.limits`
    :   Specifies the resource limit for the device. The resource name must follow the pattern `device.microshift.io/<device_name>`, where `<device_name>` matches the `name` that you specified in your configuration file. This example requests one instance of the `video` device.

    `spec.containers.securityContext`
    :   Specifies the privilege escalation. Define and configure with the least privilege value to ensure that the container has only required permissions, such as access to the device file, and to restrict other capabilities for the container.
1.  Deploy the Kubernetes workload by applying the manifest to the {{ microshift_short }} node by running the following command:
    ```terminal
    $ oc apply -f _<your_workload_manifest.yaml>_
    ```

    After the pod is running, the specified host device is available at its original path, or `mountPath` if specified, inside the container. Your application can then interact with it as if it were a local device.

    For example, if you requested `device.microshift.io/serial`, which maps to `/dev/ttyUSB*`, your application might find the device at `/dev/ttyUSB0` or a similar path inside the container.

**Verification**

*   Verify device access by running the following command inside the running pod:
    ```terminal
    $ oc exec -it _<pod_name>_ -- ls -l /dev/video0
    ```