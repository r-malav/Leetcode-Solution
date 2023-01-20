<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>LeetCode solutions</title>
    <link
      rel="shortcut icon"
      href={url.home + "/static/img/favicon.png"}
      type="image/png"
    />
    <link rel="stylesheet" href={url.home + "/static/css/app.css"} />
  </head>
  <body>
    <header className="list-header">
      <div className="row">
        <div className="name">Difficulty:</div>
        <div className="value">
          <ul className="clearfix">
            {difficultyList.map((item, index) => (
              <li
                key={index}
                className={item.slug === meta.difficulty.slug ? "selected" : ""}
              >
                <a
                  href={
                    item.slug === meta.difficulty.slug
                      ? url.home
                      : url.difficulty(item.slug)
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="name">Tag:</div>
        <div className="value">
          <ul className="clearfix">
            {tagList.map((item, index) => (
              <li
                key={index}
                className={item.slug === meta.tag.slug ? "selected" : ""}
              >
                <a
                  href={
                    item.slug === meta.tag.slug ? url.home : url.tag(item.slug)
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <th className="other">ID</th>
            <th>Title</th>
            <th className="other">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <a href={url.problem(item.slug)}>{item.name}</a>
              </td>
              <td>
                <span className={"tag " + item.difficulty.slug}>
                  {item.difficulty.name}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    <section className="paging">
      <ul className="clearfix">
        <li className={paging.pageNow > 1 ? "" : "disabled"}>
          <a
            href={
              paging.pageNow > 1
                ? type === "page"
                  ? url[type](1)
                  : url[type](meta[type].slug, 1)
                : "#"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"></path>
            </svg>
          </a>
        </li>
        <li className={paging.pageNow > 1 ? "" : "disabled"}>
          <a
            href={
              paging.pageNow > 1
                ? type === "page"
                  ? url[type](paging.pageNow - 1)
                  : url[type](meta[type].slug, paging.pageNow - 1)
                : "#"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </a>
        </li>
        {paging.pages.map((page, index) => (
          <li key={index} className={paging.pageNow === page ? "selected" : ""}>
            <a
              href={
                paging.pageNow === page
                  ? "#"
                  : type === "page"
                  ? url[type](page)
                  : url[type](meta[type].slug, page)
              }
            >
              {page}
            </a>
          </li>
        ))}
        <li className={paging.pageNow < paging.pageCount ? "" : "disabled"}>
          <a
            href={
              paging.pageNow < paging.pageCount
                ? type === "page"
                  ? url[type](paging.pageNow + 1)
                  : url[type](meta[type].slug, paging.pageNow + 1)
                : "#"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </a>
        </li>
        <li className={paging.pageNow < paging.pageCount ? "" : "disabled"}>
          <a
            href={
              paging.pageNow < paging.pageCount
                ? type === "page"
                  ? url[type](paging.pageCount)
                  : url[type](meta[type].slug, paging.pageCount)
                : "#"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </section>
    <footer>
      <a href={url.github} target="_blank">
        <img src={url.home + "/static/img/github.png"} alt="github" />
      </a>
    </footer>
  </body>
</html>;
