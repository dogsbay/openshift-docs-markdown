{%- set _mod_docs_content_type = "CONCEPT" %}
# About configuring the router {id="microshift-about-router-config_{{ context }}"}

To make ingress optional, you can configure {{ microshift_short }} ingress router settings to manage which ports, if any, are exposed to network traffic. Specified routing is an example of ingress load balancing. {._abstract}

*   The default ingress router is always on, running on all IP addresses on the `http: 80` and `https: 443` ports.
*   Default router settings allow access to any namespace.

Some applications running on top of {{ microshift_short }} might not require the default router and instead create their own. You can configure the router to control both ingress and namespace access.


:::tip

You can check for the presence of the default router in your {{ microshift_short }} installation before you begin configurations by using the `oc get deployment -n openshift-ingress` command, which returns the following output:

```terminal
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
router-default   1/1     1            1           2d23h
```

:::