import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  HOME_ROUTE, ABOUT_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE
} from "@/constants";
import { HelperUtils } from "@/utils";
/**
 * 提供了通用导航功能以及特定页面的导航功能的Hook。
 * @returns 返回一个对象，包含两个方法：navigateWithParams用于通用路径导航，goToExploreCharacterDetail用于特定角色详情页的导航。
 */
export const useNavigateWithParams = () => {
  const navigate = useNavigate();

  /**
   * 使用参数导航到指定路径
   * @param path - 要导航到的路径，支持传入字符串。
   * @param options - 可选的查询参数和状态
   * @returns 无返回值。
   */
  const navigateWithParams = useCallback(
    (path, options = {}) => {
      // 构建查询字符串
      const queryString = options.query
        ? Object.keys(options.query)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(options.query[key])}`
          )
          .join("&")
        : "";
      // 拼接完整路径
      const fullPath = queryString ? `${path}?${queryString}` : path;
      console.log("fullPath: ", fullPath);

      // 执行导航
      navigate(fullPath, { ...options, state: options.state });
    },
    [navigate] // 依赖项，仅当navigate变化时重新计算
  );



  /**
   * 用于导航到首页页面的函数。
   * @returns 无返回值。
   */
  const goToHome = useCallback(() => {
    navigateWithParams(HOME_ROUTE);
  }, [navigateWithParams]);

  const goAbout = useCallback(() => {
    navigateWithParams(ABOUT_ROUTE);
    HelperUtils.scrollToTop();
  }, [navigateWithParams]);

  const goContact = useCallback(() => {
    navigateWithParams(CONTACT_ROUTE);
    HelperUtils.scrollToTop();
  }, [navigateWithParams]);

  const goFaq = useCallback(() => {
    navigateWithParams(FAQ_ROUTE);
    HelperUtils.scrollToTop();
  }, [navigateWithParams]);

  return {
    navigateWithParams,

    goToHome,
    goAbout,
    goContact,
    goFaq,

  };
};
