{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure ingress control in {{ microshift_short }} {id="microshift-ingress-control-config_{{ context }}"}

To apply detailed ingress control such as timeouts, TLS, and logging in {{ microshift_short }}, you can update the `config.yaml` file or add a configuration snippet in the `/etc/microshift/config.d/` directory. Replace the default values in the ingress section and restart the service. {._abstract}


:::important

*   A `config.yaml` configuration file takes precedence over built-in settings. The `config.yaml` file is read every time the {{ microshift_short }} service starts.
*   Configuration snippet YAMLs take precedence over both built-in settings and the `config.yaml` configuration file.

:::


**Prerequisites**

*   You installed the {{ oc_first }}.
*   You have root access to the node.
*   Your node uses the OVN-Kubernetes Container Network Interface (CNI) plugin.

**Procedure**

1.  Apply ingress control settings in one of the two following ways:
    1.  Update the {{ microshift_short }} `config.yaml` configuration file by making a copy of the provided `config.yaml.default` file in the `/etc/microshift/` directory, naming it `config.yaml` and keeping it in the source directory.
    1.  Use a configuration snippet to apply the ingress control settings you want. To do this, create a configuration snippet YAML file and put it in the `/etc/microshift/config.d/` configuration directory.
1.  Replace the default values in the `ingress` section of the {{ microshift_short }} YAML with your valid values, or create a configuration snippet file with the sections you need.
    ```yaml title="Ingress controller configuration fields with default values"
    apiServer:
    # ...
    ingress:
      accessLogging:
        destination:
          container:
            maxLength: 1024
          syslog:
            address: ""
            facility: ""
            maxLength: 1024
            port: 0
          type: ""
        httpCaptureCookies:
          - matchType: ""
            maxLength: 0
            name: ""
            namePrefix: ""
        httpCaptureHeaders:
          request:
            - maxLength: 0
              name: ""
          response:
            - maxLength: 0
              name: ""
        httpLogFormat: ""
        status: Disabled
      certificateSecret: router-certs-custom
      clientTLS:
        allowedSubjectPatterns: []
        clientCA:
          name: ""
        clientCertificatePolicy: ""
      defaultHTTPVersion: 1
      forwardedHeaderPolicy: Append
      httpCompression:
        mimeTypes:
          - ""
      httpEmptyRequestsPolicy: Respond
      httpErrorCodePages:
          name: ""
      listenAddress: []
      logEmptyRequests: Log
      ports:
         http: 80
         https: 443
      routeAdmissionPolicy:
        namespaceOwnership: InterNamespaceAllowed
        wildcardPolicy: WildcardsDisallowed
      status: Managed
      tlsSecurityProfile:
        type:
        custom:
          ciphers:[]
          minTLSVersion:""
        intermediate: {}
        old: {}
      tuningOptions:
        clientFinTimeout: 1s
        clientTimeout: 30s
        headerBufferBytes: 0
        headerBufferMaxRewriteBytes: 0
        healthCheckInterval: 5s
        maxConnections: 0
        serverFinTimeout: 1s
        serverTimeout: 30s
        threadCount: 4
        tlsInspectDelay: 5s
        tunnelTimeout: 1h
    # ...
    ```

    See "Ingress controller configuration fields in {{ microshift_short }}" for more information about each field.
1.  Complete any other configurations you require, then start or restart {{ microshift_short }} by running one the following commands:
    ```terminal
    $ sudo systemctl start microshift
    ```
    ```terminal
    $ sudo systemctl restart microshift
    ```

**Verification**

After making ingress configuration changes and restarting {{ microshift_short }}, you can check the age of the router pod to ensure that changes are applied.

*   To check the status of the router pod, run the following command:
    ```terminal
    $ oc get pods -n openshift-ingress
    ```
    ```terminal title="Example output"
    NAME                              READY   STATUS    RESTARTS   AGE
    router-default-8649b5bf65-w29cn   1/1     Running   0          6m10s
    ```