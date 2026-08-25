{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring alert routing for default platform alerts {id="configuring-alert-routing-default-platform-alerts_{{ context }}"}

You can configure Alertmanager to send notifications to receive important alerts coming from your cluster. Customize where and how Alertmanager sends notifications about default platform alerts by editing the default configuration in the `alertmanager-main` secret in the `openshift-monitoring` namespace.


:::note

All features of a supported version of upstream Alertmanager are also supported in an {{ product_title }} Alertmanager configuration. To check all the configuration options of a supported version of upstream Alertmanager, see [Alertmanager configuration](https://prometheus.io/docs/alerting/0.28/configuration/) (Prometheus documentation).

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Extract the currently active Alertmanager configuration from the `alertmanager-main` secret and save it as a local `alertmanager.yaml` file:
    ```terminal
    $ oc -n openshift-monitoring get secret alertmanager-main --template='{{ index .data "alertmanager.yaml" }}' | base64 --decode > alertmanager.yaml
    ```
1.  Open the `alertmanager.yaml` file.
1.  Edit the Alertmanager configuration:
    1.  Optional: Change the default Alertmanager configuration:
        ```yaml title="Example of the default Alertmanager secret YAML"
        global:
          resolve_timeout: 5m
          http_config:
            proxy_from_environment: true # (1)
        route:
          group_wait: 30s # (2)
          group_interval: 5m # (3)
          repeat_interval: 12h # (4)
          receiver: default
          routes:
          - matchers:
            - "alertname=Watchdog"
            repeat_interval: 2m
            receiver: watchdog
        receivers:
        - name: default
        - name: watchdog
        ```
        1.  If you configured an HTTP cluster-wide proxy, set the `proxy_from_environment` parameter to `true` to enable proxying for all alert receivers.
        1.  Specify how long Alertmanager waits while collecting initial alerts for a group of alerts before sending a notification.
        1.  Specify how much time must elapse before Alertmanager sends a notification about new alerts added to a group of alerts for which an initial notification was already sent.
        1.  Specify the minimum amount of time that must pass before an alert notification is repeated.
        If you want a notification to repeat at each group interval, set the `repeat_interval` value to less than the `group_interval` value.
        The repeated notification can still be delayed, for example, when certain Alertmanager pods are restarted or rescheduled.
    1.  Add your alert receiver configuration:
        ```yaml
        # ...
        receivers:
        - name: default
        - name: watchdog
        - name: <receiver> # (1)
          <receiver_configuration> # (2)
        # ...
        ```
        1.  The name of the receiver.
        1.  The receiver configuration. The supported receivers are PagerDuty, webhook, email, Slack, and Microsoft Teams.
            ```yaml title="Example of configuring PagerDuty as an alert receiver"
            # ...
            receivers:
            - name: default
            - name: watchdog
            - name: team-frontend-page
              pagerduty_configs:
              - routing_key: xxxxxxxxxx # (1)
                http_config: # <2> 
                  proxy_from_environment: true
                  authorization:
                    credentials: xxxxxxxxxx
            # ...
            ```
        1.  Defines the PagerDuty integration key.
        1.  Optional: Add the custom HTTP configuration for a specific receiver. That receiver does not inherit the global HTTP configuration settings.
            ```yaml title="Example of configuring email as an alert receiver"
            # ...
            receivers:
            - name: default
            - name: watchdog
            - name: team-frontend-page
              email_configs:
                - to: myemail@example.com # (1)
                  from: alertmanager@example.com # (2)
                  smarthost: 'smtp.example.com:587' # (3)
                  auth_username: alertmanager@example.com  # (4)
                  auth_password: password
                  hello: alertmanager # (5)
            # ...
            ```
            1.  Specify an email address to send notifications to.
            1.  Specify an email address to send notifications from.
            1.  Specify the SMTP server address used for sending emails, including the port number.
            1.  Specify the authentication credentials that Alertmanager uses to connect to the SMTP server. This example uses username and password.
            1.  Specify the hostname to identify to the SMTP server. If you do not include this parameter, the hostname defaults to `localhost`.

            :::important

            Alertmanager requires an external SMTP server to send email alerts. To configure email alert receivers, ensure you have the necessary connection details for an external SMTP server.
            
            :::

    1.  Add the routing configuration:
        ```yaml
        # ...
        route:
          group_wait: 30s 
          group_interval: 5m 
          repeat_interval: 12h
          receiver: default
          routes:
          - matchers:
            - "alertname=Watchdog"
            repeat_interval: 2m
            receiver: watchdog
          - matchers: # (1)
            - "<your_matching_rules>" # (2)
            receiver: <receiver> # (3)
        # ...
        ```
        1.  Use the `matchers` key name to specify the matching rules that an alert has to fulfill to match the node.
        If you define inhibition rules, use `target_matchers` key name for target matchers and `source_matchers` key name for source matchers.
        1.  Specify labels to match your alerts.
        1.  Specify the name of the receiver to use for the alerts.

            :::warning

            Do not use the `match`, `match_re`, `target_match`, `target_match_re`, `source_match`, and `source_match_re` key names, which are deprecated and planned for removal in a future release.
            
            :::

            ```yaml title="Example of alert routing "
            # ...
            route:
              group_wait: 30s 
              group_interval: 5m 
              repeat_interval: 12h
              receiver: default
              routes:
              - matchers:
                - "alertname=Watchdog"
                repeat_interval: 2m
                receiver: watchdog
              - matchers: # (1)
                - "service=example-app"
                routes: # (2)
                - matchers:
                  - "severity=critical"
                  receiver: team-frontend-page
            # ...
            ```
            1.  This example matches alerts from the `example-app` service.
            1.  You can create routes within other routes for more complex alert routing. 

            The previous example routes alerts of `critical` severity that are fired by the `example-app` service to the `team-frontend-page` receiver. Typically, these types of alerts are paged to an individual or a critical response team.
1.  Apply the new configuration in the file:
    ```terminal
    $ oc -n openshift-monitoring create secret generic alertmanager-main --from-file=alertmanager.yaml --dry-run=client -o=yaml |  oc -n openshift-monitoring replace secret --filename=-
    ```
1.  Verify your routing configuration by visualizing the routing tree:
    ```terminal
    $ oc exec alertmanager-main-0 -n openshift-monitoring -- amtool config routes show --alertmanager.url http://localhost:9093
    ```
    ```terminal title="Example output"
    Routing tree:
    .
    └── default-route  receiver: default
        ├── {alertname="Watchdog"}  receiver: Watchdog
        └── {service="example-app"}  receiver: default
            └── {severity="critical"}  receiver: team-frontend-page
    ```