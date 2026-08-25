{%- set _mod_docs_content_type = "PROCEDURE" %}
# Default settings {id="microshift-yaml-default_{{ context }}"}

{%- set FeatureName = "The Generic Device Plugin for {{ microshift_short }}" %}

{% include "./snippets/technology-preview.md" %}

When no `config.yaml` or configuration snippet exists, {{ microshift_short }} uses built-in default values. To view these defaults, run `microshift show-config`. {._abstract}

The following example shows the default configuration settings.

**Procedure**

*   To see the default values, run the following command:
    ```terminal
    $ microshift show-config
    ```
    ```yaml title="Default values example output in YAML form"
    apiServer:
      advertiseAddress: 10.44.0.0/32
      auditLog:
        maxFileAge: 0
        maxFileSize: 200
        maxFiles: 10
        profile: Default
      namedCertificates:
        - certPath: ""
          keyPath: ""
          names:
            - ""
      subjectAltNames: []
      tls:
        cipherSuites:
        minVersion: VersionTLS12
    debugging:
      logLevel: "Normal"
    dns:
      baseDomain: microshift.example.com
    etcd:
      memoryLimitMB: 0
    genericDevicePlugin:
        devices:
            - groups:
                - count: 1
                  paths:
                    - limit: 1
                      mountPath: /dev/ttyACM0
                      path: /dev/ttyACM0
                      permissions: mrw
                      readOnly: false
                      type: Device
                  usbs:
                    - product: ""
                      serial: ""
                      vendor: ""
              name: serial
        domain: device.microshift.io
        status: Disabled
    ingress:
      accessLogging:
        destination:
          type:
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
      certificateSecret: router-certs-default
      clientTLS:
        allowedSubjectPatterns:
        clientCA:
          name: ""
        clientCertificatePolicy: ""
      defaultHTTPVersion: 1
      forwardedHeaderPolicy: ""
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
        wildcardPolicy: WildcardPolicyAllowed
      status: Managed
      tlsSecurityProfile:
        type: Intermediate
      tuningOptions:
          clientFinTimeout: "1s"
          clientTimeout: "30s"
          headerBufferBytes: 0
          headerBufferMaxRewriteBytes: 0
          healthCheckInterval: "5s"
          maxConnections: 0
          serverFinTimeout: "1s"
          serverTimeout: "30s"
          threadCount: 0
          tlsInspectDelay: "5s"
          tunnelTimeout: "1h"
    kubelet:
    manifests:
      kustomizePaths:
        - /usr/lib/microshift/manifests
        - /usr/lib/microshift/manifests.d/*
        - /etc/microshift/manifests
        - /etc/microshift/manifests.d/*
    network:
      clusterNetwork:
        - 10.42.0.0/16
      cniPlugin: ""
      multus:
        status: Disabled
      serviceNetwork:
        - 10.43.0.0/16
      serviceNodePortRange: 30000-32767
    node:
      hostnameOverride: ""
      nodeIP: ""
      nodeIPv6: ""
    storage:
      driver: ""
      optionalCsiComponents:
        - ""
    telemetry:
      endpoint: https://infogw.api.openshift.com
      proxy: ""
      status: Enabled
    ```

    where:

    `apiserver.advertiseAddress`
    :   Specifies the address of the service network.

    `network.multus.status`
    :   Specifies the status of the Multus Container Network Interface (CNI).

    `node.nodeIP`
    :   Specifies the IP address of the default route.

    `storage.driver`
    :   Specifies the storage driver to use. Default null value deploys Logical Volume Managed Storage (LVMS).

    `storage.optionalCsiComponents`
    :   Specifies the CSI components to deploy. Default null value deploys `snapshot-controller`.